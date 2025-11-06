import { useState } from 'react'

import './App.css'
import ContactForm from './components/ContactForm'
import Hero from './components/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ContactForm/> */}
     <Hero/>
    </>
  )
}

export default App
