import { WorkExperience } from '@/types'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceSectionProps {
  experience: WorkExperience[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const formatDate = (date: string | null | undefined) => {
    if (!date) return 'Present'
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <section id="experience" className="section-padding bg-dark-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-600"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-dark-700 rounded-full border-4 border-primary-500 flex items-center justify-center">
                      {exp.metadata?.company_logo ? (
                        <img
                          src={`${exp.metadata.company_logo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                          alt={exp.metadata?.company_name}
                          className="w-8 h-8 rounded-full object-cover"
                          width="32"
                          height="32"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.metadata?.job_title}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {exp.metadata?.company_name}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {formatDate(exp.metadata?.start_date)} - {
                          exp.metadata?.current_position 
                            ? 'Present' 
                            : formatDate(exp.metadata?.end_date)
                        }
                        {exp.metadata?.current_position && (
                          <span className="ml-2 px-2 py-1 bg-green-900/50 text-green-300 rounded text-xs">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.metadata?.description}
                    </p>

                    {exp.metadata?.achievements && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                        <div className="text-sm text-gray-300 whitespace-pre-line">
                          {exp.metadata.achievements}
                        </div>
                      </div>
                    )}

                    {exp.metadata?.technologies && exp.metadata.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.metadata.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}