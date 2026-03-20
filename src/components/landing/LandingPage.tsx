import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Layout from './Layout'
import TitleSection from './bp/TitleSection'
import CompanySection from './bp/CompanySection'
import TerritorySection from './bp/TerritorySection'
import ServicesSection from './bp/ServicesSection'
import StaffSection from './bp/StaffSection'
import MotivationSection from './bp/MotivationSection'
import ConsumerSection from './bp/ConsumerSection'
import CompetitorsSection from './bp/CompetitorsSection'
import SWOTSection from './bp/SWOTSection'
import ConsumerAnalysisSection from './bp/ConsumerAnalysisSection'
import RisksSection from './bp/RisksSection'
import ExpensesSection from './bp/ExpensesSection'
import RevenueSection from './bp/RevenueSection'

const sectionIds = [
  'title', 'company', 'territory', 'services', 'staff', 'motivation',
  'consumer', 'competitors', 'swot', 'consumer-analysis', 'risks', 'expenses', 'revenue'
]

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const isActive = (i: number) => i === activeSection

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sectionIds.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full my-1.5 transition-all ${
              index === activeSection ? 'bg-[#4F8EF7] scale-150' : 'bg-gray-700'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#4F8EF7] origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        <TitleSection isActive={isActive(0)} />
        <CompanySection isActive={isActive(1)} />
        <TerritorySection isActive={isActive(2)} />
        <ServicesSection isActive={isActive(3)} />
        <StaffSection isActive={isActive(4)} />
        <MotivationSection isActive={isActive(5)} />
        <ConsumerSection isActive={isActive(6)} />
        <CompetitorsSection isActive={isActive(7)} />
        <SWOTSection isActive={isActive(8)} />
        <ConsumerAnalysisSection isActive={isActive(9)} />
        <RisksSection isActive={isActive(10)} />
        <ExpensesSection isActive={isActive(11)} />
        <RevenueSection isActive={isActive(12)} />
      </div>
    </Layout>
  )
}
