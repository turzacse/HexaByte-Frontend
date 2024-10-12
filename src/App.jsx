import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-[#658baf] h-screen'>
    {/* bg-[#658baf] */}
    <div className='mx-10 py-10'>
    <h2 className='font-bold text-3xl'>Fahim Montasir Turza</h2>
    <p className='mt-10'>
      This the demo project setup with vite using ReactJS and TailwindCSS
    </p>
    <button className='btn btn-sm px-4 rounded-xl bg-[#F9A825]'>Yes</button>
   </div>
   </div>
  )
}

export default App
