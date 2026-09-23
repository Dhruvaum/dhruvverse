import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import SectionDivider from '../../components/SectionDivider'

export default function MyDeveloperPortfolio() {
  return (
    <>
      <Hero/>
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </>
  )
}