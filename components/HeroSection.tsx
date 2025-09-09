import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary mb-6">
            Full Stack <span className="text-gradient">Developer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Crafting exceptional web applications with modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}