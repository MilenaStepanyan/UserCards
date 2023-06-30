import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'

function App() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <>
  
      <User/>
    </>
  )
}

export default App
