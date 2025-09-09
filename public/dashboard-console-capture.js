(function() {
  // Only run in iframe (dashboard preview)
  if (window.self === window.top) return;
  
  const logs = [];
  const MAX_LOGS = 500;
  
  // Store original console methods
  const originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info,
    debug: console.debug
  };
  
  // Helper function to safely stringify objects
  function safeStringify(obj) {
    try {
      return JSON.stringify(obj, function(key, value) {
        if (typeof value === 'function') {
          return '[Function: ' + (value.name || 'anonymous') + ']';
        }
        if (value instanceof Error) {
          return {
            name: value.name,
            message: value.message,
            stack: value.stack
          };
        }
        return value;
      }, 2);
    } catch (e) {
      return '[Object: unable to stringify]';
    }
  }
  
  // Capture console logs
  function captureLog(level, args) {
    // Call original console method first
    originalConsole[level].apply(console, args);
    
    const timestamp = new Date().toISOString();
    const message = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        return safeStringify(arg);
      }
      return String(arg);
    }).join(' ');
    
    const logEntry = {
      timestamp,
      level,
      message,
      url: window.location.href
    };
    
    logs.push(logEntry);
    if (logs.length > MAX_LOGS) {
      logs.shift();
    }
    
    // Send to parent dashboard
    try {
      window.parent.postMessage({
        type: 'console-log',
        log: logEntry
      }, '*');
    } catch (e) {
      // Silent fail if parent is not accessible
    }
  }
  
  // Override console methods
  console.log = function() { captureLog('log', arguments); };
  console.warn = function() { captureLog('warn', arguments); };
  console.error = function() { captureLog('error', arguments); };
  console.info = function() { captureLog('info', arguments); };
  console.debug = function() { captureLog('debug', arguments); };
  
  // Capture unhandled errors
  window.addEventListener('error', function(event) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: 'error',
      message: `Uncaught Error: ${event.error?.message || event.message} at ${event.filename}:${event.lineno}:${event.colno}`,
      url: window.location.href
    };
    
    logs.push(logEntry);
    if (logs.length > MAX_LOGS) {
      logs.shift();
    }
    
    try {
      window.parent.postMessage({
        type: 'console-log',
        log: logEntry
      }, '*');
    } catch (e) {}
  });
  
  // Capture unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: 'error',
      message: `Unhandled Promise Rejection: ${event.reason}`,
      url: window.location.href
    };
    
    logs.push(logEntry);
    if (logs.length > MAX_LOGS) {
      logs.shift();
    }
    
    try {
      window.parent.postMessage({
        type: 'console-log',
        log: logEntry
      }, '*');
    } catch (e) {}
  });
  
  // Send ready signal and initial route
  function sendReady() {
    try {
      window.parent.postMessage({
        type: 'console-capture-ready',
        url: window.location.href,
        timestamp: new Date().toISOString()
      }, '*');
      
      // Also send initial route information
      sendRouteChange();
    } catch (e) {}
  }
  
  // Send route change information
  function sendRouteChange() {
    try {
      window.parent.postMessage({
        type: 'route-change',
        route: {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
          href: window.location.href
        },
        timestamp: new Date().toISOString()
      }, '*');
    } catch (e) {}
  }
  
  // Monitor route changes for SPAs
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    setTimeout(sendRouteChange, 0);
  };
  
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    setTimeout(sendRouteChange, 0);
  };
  
  window.addEventListener('popstate', sendRouteChange);
  window.addEventListener('hashchange', sendRouteChange);
  
  // Send ready signal when loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sendReady);
  } else {
    sendReady();
  }
  
  // Also send on window load as backup
  window.addEventListener('load', sendReady);
})();