import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='mx-10 my-10'>
    <h2 className='font-bold text-3xl'>Fahim Montasir Turza</h2>
    <p className='mt-10'>
      This the demo project setup with vite using ReactJS and TailwindCSS
    </p>
   </div>
  )
}

export default App
