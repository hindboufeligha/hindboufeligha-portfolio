import { ExternalLink } from 'lucide-react'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-transform hover:-translate-y-1 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-accent)]">
          {project.category}
        </span>

        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title}`}
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ExternalLink aria-hidden="true" className="size-5" />
          </a>
        )}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-foreground)]"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
