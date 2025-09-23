import MinimalProfileStatic from '@/components/userInfo/static/MinimalProfileStatic'
import OrbitingCirclesStatic from '@/components/skills/static/OrbitingCirclesStatic'
import ThreeDCardStatic from '@/components/projects/static/ThreeDCardStatic'
import CustomSection3Static from '@/components/custom/static/CustomSection3Static'
import CustomSectionListStatic from '@/components/custom/static/CustomSectionListStatic'
import CustomSectionTimelineStatic from '@/components/custom/static/CustomSectionTimelineStatic'
import portfolioData from '@/data/portfolio.json'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <MinimalProfileStatic personal={portfolioData.personal} />
        {portfolioData.projects && <ThreeDCardStatic projects={portfolioData.projects} />}
        {portfolioData.education && <CustomSection3Static section={{
          section_name: "Education",
          layout_type: "card",
          items: portfolioData.education.map((edu, index) => ({
            primaryTitle: edu.university,
            secondaryTitle: edu.degree,
            dateInfo: `${edu.start_year || ''} - ${edu.end_year || 'Present'}`.trim(),
            location: edu.location,
            description: edu.description,
            logoUrl: edu.logoUrl,
            customLinks: edu.custom_links
          }))
        }} />}
        {portfolioData.workExperience && <CustomSection3Static section={{
          section_name: "Work Experience",
          layout_type: "card",
          items: portfolioData.workExperience.map((exp, index) => ({
            primaryTitle: exp.company,
            secondaryTitle: exp.position,
            dateInfo: `${exp.start_date || ''} - ${exp.end_date || 'Present'}`.trim(),
            location: exp.location,
            description: exp.description,
            logoUrl: exp.logoUrl,
            customLinks: exp.custom_links
          }))
        }} />}
        {portfolioData.skills && <OrbitingCirclesStatic skills={portfolioData.skills} />}
      </div>
    </main>
  )
}