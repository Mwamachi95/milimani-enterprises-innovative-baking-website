import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
