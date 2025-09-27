import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Hero from './Hero'
import Home from './Home'
import Navbar from './Navbar'
import SomeProduct from './SomeProduct'
import Products from './Products'
import Reset from './Reset'
import Login from './Login'


function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero /><Home /> <SomeProduct /> </>} />
        <Route path='/products' element={<Products />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {location.pathname !== '/reset' && location.pathname !== '/login' && <Footer />}
    </>
  )
}

export default App
