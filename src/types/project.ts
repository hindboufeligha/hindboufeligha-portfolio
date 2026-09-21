export type ProjectCategory =
  'Software Engineering' | 'Research' | 'Machine Learning'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  technologies: string[]
  externalUrl?: string
  externalUrlType?: 'github' | 'publication' | 'demo' | 'other'
}
