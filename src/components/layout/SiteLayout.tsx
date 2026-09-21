/* The page-level structure shell */
import type { ReactNode } from 'react'

interface SiteLayoutProps {
  children: ReactNode
}

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {children}
    </div>
  )
}

export default SiteLayout
