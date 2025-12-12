import './App.css'
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import {Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import TourList from './pages/Tour List/TourList';
import TourDetail from './pages/Tour Detail/TourDetail';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import FavoriteList from './pages/Favorites/FavoritesList';
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
          <Route path='profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path='favorites' element={<FavoriteList/>}></Route>

        </Route>
      </Routes>
  
  )
}

export default App
