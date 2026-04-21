import { useState } from 'react'
import './App.css'
// import Button from './components/button'
import HeroSection from './components/HeroSection'
import SkillSection from './components/SkillsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='min-h-screen bg-lines w-full font-persona-body italic uppercase tracking-wider'>
      <div className="fixed inset-0 w-full h-full opacity-[0.015] pointer-events-none z-50 bg-[url(/noise.png)]"></div>
      <HeroSection />
      <SkillSection />
    </main>
    </>
  )
}

export default App
