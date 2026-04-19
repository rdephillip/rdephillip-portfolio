import { useState } from 'react'

function App() {
  const [heroExpanded, setHeroExpanded] = useState(true)

  return (
    <div className='app'>
      <section className='hero'>
        hero goes here
      </section>

      <main className='panels'>
        <section className='panel'>projects</section>
        <section className='panel'>skills</section>
        <section className='panel'>experience</section>
        <section className='panel'>education</section>
        <section className='panel'>learning</section>
      </main>
    </div>
  )
}

export default App