import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/aboutUs'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
