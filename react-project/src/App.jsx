import './App.css'
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import Tours from './pages/Tours/TourList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import TourList from './pages/Tours/TourList';
import TourDetail from './pages/Tours/TourDetail';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile/Profile';
function App() {
  

  return (
   
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="tours" element={<TourList/>}/>
          <Route path='tours/:id' element={<TourDetail/>}/>

          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='profile' element={<Profile/>}/>

        </Route>
      </Routes>
  
  )
}

export default App
