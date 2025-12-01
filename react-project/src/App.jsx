import './App.css'
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import Tours from './pages/Tours/TourList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import TourList from './pages/Tours/TourList';
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="tours" element={<TourList/>}/>
      
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
