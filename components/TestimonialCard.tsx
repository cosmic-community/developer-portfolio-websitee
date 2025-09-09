import { Testimonial } from '@/types'
import { Quote, Star, ExternalLink } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating?: string) => {
    if (!rating) return null
    
    const ratingNumber = parseInt(rating)
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < ratingNumber
      return (
        <Star
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
        />
      )
    })
  }

  return (
    <div className="card relative">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-primary-500 mb-4" />

      {/* Testimonial content */}
      <blockquote className="text-gray-300 leading-relaxed mb-6">
        "{testimonial.metadata?.testimonial_text}"
      </blockquote>

      {/* Rating */}
      {testimonial.metadata?.rating && (
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {renderStars(testimonial.metadata.rating.key)}
          </div>
          <span className="text-sm text-gray-400">
            {testimonial.metadata.rating.value}
          </span>
        </div>
      )}

      {/* Client info */}
      <div className="flex items-center gap-4">
        {testimonial.metadata?.client_photo && (
          <img
            src={`${testimonial.metadata.client_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={testimonial.metadata?.client_name}
            className="w-12 h-12 rounded-full object-cover"
            width="48"
            height="48"
          />
        )}
        
        <div className="flex-1">
          <h4 className="font-semibold text-white">
            {testimonial.metadata?.client_name}
          </h4>
          <p className="text-sm text-gray-400">
            {testimonial.metadata?.company_title}
          </p>
        </div>
      </div>

      {/* Related project */}
      {testimonial.metadata?.related_project && (
        <div className="mt-6 pt-6 border-t border-dark-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Related Project:</p>
              <p className="font-medium text-primary-400">
                {testimonial.metadata.related_project.metadata?.project_name || 
                 testimonial.metadata.related_project.title}
              </p>
            </div>
            {testimonial.metadata.related_project.metadata?.live_url && (
              <a
                href={testimonial.metadata.related_project.metadata.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="View project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}