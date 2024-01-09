import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Overview from './components/Overview/Overview'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = () => setIsOpen(prev => !prev)

  return (
    <section className='w-full min-h-screen flex-end'>
      <Sidebar isOpen={isOpen} handleToggle={handleToggleMenu} />

      <div className=" min-h-screen gap-8 pb-8 flex-col-start bg-[#fafafa] lg:w-[calc(100%-224px)] w-full">
        <Topbar isOpen={isOpen} handleToggle={handleToggleMenu} />
        <Overview />
      </div>

    </section>
  )
}

export default App
