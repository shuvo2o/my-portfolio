
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
    <footer>This is project footer</footer>

    </div>
  )
}

export default App
