'use client'

import { useState } from 'react'
import { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import { Filter } from 'lucide-react'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [selectedTech, setSelectedTech] = useState<string>('all')

  // Get unique technologies and statuses
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.metadata?.technologies || []))
  )
  const allStatuses = Array.from(
    new Set(projects.map(project => project.metadata?.status?.value).filter(Boolean))
  )

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesStatus = selectedStatus === 'all' || project.metadata?.status?.value === selectedStatus
    const matchesTech = selectedTech === 'all' || project.metadata?.technologies?.includes(selectedTech)
    return matchesStatus && matchesTech
  })

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in web development
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filter by:</span>
            </div>
            
            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value="all">All Status</option>
              {allStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            {/* Technology Filter */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found with the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  )
}