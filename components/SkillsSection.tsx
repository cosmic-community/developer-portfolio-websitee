import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.metadata?.category?.value || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryOrder = ['Frontend', 'Backend', 'Database', 'Tools & DevOps', 'Mobile']

  const getProficiencyColor = (proficiency?: string) => {
    switch (proficiency?.toLowerCase()) {
      case 'expert':
        return 'bg-green-500'
      case 'advanced':
        return 'bg-blue-500'
      case 'intermediate':
        return 'bg-yellow-500'
      case 'beginner':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getProficiencyWidth = (proficiency?: string) => {
    switch (proficiency?.toLowerCase()) {
      case 'expert':
        return 'w-full'
      case 'advanced':
        return 'w-3/4'
      case 'intermediate':
        return 'w-1/2'
      case 'beginner':
        return 'w-1/4'
      default:
        return 'w-1/4'
    }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categoryOrder
            .filter(categoryKey => {
              const skills = skillsByCategory[categoryKey];
              return skills && skills.length > 0;
            })
            .map((categoryKey) => {
              const skills = skillsByCategory[categoryKey];
              
              if (!skills || skills.length === 0) {
                return null;
              }
              
              return (
                <div key={categoryKey} className="card">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    {categoryKey}
                    <span className="text-sm text-gray-400">({skills.length})</span>
                  </h3>
                  
                  <div className="space-y-6">
                    {skills.map((skill) => {
                      if (!skill || !skill.metadata) {
                        return null;
                      }
                      
                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-white">
                              {skill.metadata.skill_name || skill.title}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-400">
                                {skill.metadata.proficiency?.value}
                              </span>
                              {skill.metadata.years_experience && (
                                <span className="text-xs text-gray-500">
                                  {skill.metadata.years_experience}y
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="w-full bg-dark-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${
                                getProficiencyColor(skill.metadata.proficiency?.value)
                              } ${
                                getProficiencyWidth(skill.metadata.proficiency?.value)
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  )
}