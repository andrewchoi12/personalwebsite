import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Nav">
        <Header />
      </div>
      <main className="Main">
        <About />
        <Skills />
        <Projects />
        <Resume />
      </main>
    </>
  )
}

export default App