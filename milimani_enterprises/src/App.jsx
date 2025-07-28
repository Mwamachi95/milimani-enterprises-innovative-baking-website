import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/aboutUs'
import ContactUs from './pages/contactUs'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
