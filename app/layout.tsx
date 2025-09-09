import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Developer Portfolio - Showcasing Projects & Skills',
  description: 'Professional developer portfolio featuring projects, skills, work experience, and client testimonials. Built with Next.js and Cosmic CMS.',
  keywords: 'developer, portfolio, projects, skills, web development, full stack',
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    title: 'Developer Portfolio - Showcasing Projects & Skills',
    description: 'Professional developer portfolio featuring projects, skills, work experience, and client testimonials.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="bg-dark-900 text-white">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}