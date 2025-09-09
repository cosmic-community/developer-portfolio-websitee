import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group">
      {/* Project Image */}
      {project.metadata?.project_image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img
            src={`${project.metadata.project_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={project.metadata?.project_name || project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            width="300"
            height="200"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            {project.metadata?.project_name || project.title}
          </h3>
          {project.metadata?.status && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.metadata.status.value === 'Completed' 
                ? 'bg-green-900/50 text-green-300 border border-green-700' 
                : project.metadata.status.value === 'In Progress'
                ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                : 'bg-gray-900/50 text-gray-300 border border-gray-700'
            }`}>
              {project.metadata.status.value}
            </span>
          )}
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {project.metadata?.description}
        </p>

        {/* Technologies */}
        {project.metadata?.technologies && project.metadata.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.metadata.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary-900/30 text-primary-300 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 pt-4">
          {project.metadata?.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.metadata?.github_url && (
            <a
              href={project.metadata.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}