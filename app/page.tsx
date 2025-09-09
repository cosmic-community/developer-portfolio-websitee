import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { getProjects, getSkills, getWorkExperience, getTestimonials } from '@/lib/cosmic'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [projects, skills, workExperience, testimonials] = await Promise.all([
    getProjects(),
    getSkills(),
    getWorkExperience(),
    getTestimonials()
  ])

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={workExperience} />
      <TestimonialsSection testimonials={testimonials} />
      <Footer />
    </main>
  )
}