import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container">
        <div className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Ready to start your next project? Let's discuss how I can help bring your ideas to life.
              </p>
              <a
                href="mailto:hello@example.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="flex gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-dark-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Developer Portfolio. Built with Next.js and Cosmic.</p>
        </div>
      </div>
    </footer>
  )
}