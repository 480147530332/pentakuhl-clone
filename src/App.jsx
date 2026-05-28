import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Industries from './assets/pages/Industries'
import Pentakuhl from '/src/assets/pages/Pentakuhl.jsx'
import ScrollToTop from './assets/components/ScrollToTop'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/industries' element={<Industries/>} />
        <Route path='/pentakuhl' element={<Pentakuhl/>} />
        {/* 2. SWAP Out <Pentakuhl /> with your new <ParcelShippers /> component here */}
 
      </Routes>

      <Footer />
    </>
  )
}

export default App