
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
    <Navbar/>
    <main className='my-4'>
      <Outlet/>
    </main>

    </div>
  )
}

export default App
