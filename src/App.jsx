import { useState } from 'react'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Education } from './components/sections/Education'
import { Learning } from './components/sections/Learning'

function App() {
  const [heroExpanded, setHeroExpanded] = useState(true)

  return (
    <div className='app'>
      <Hero
        heroExpanded={heroExpanded}
        setHeroExpanded={setHeroExpanded}
      />
      <main className='panels'>
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Learning />
      </main>
    </div>
  )
}

export default App