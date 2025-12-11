import './App.css'
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import Tours from './pages/Tour List/TourList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import TourList from './pages/Tour List/TourList';
import TourDetail from './pages/Tour Detail/TourDetail';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Profile from './pages/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { fetchFavorites } from './features/favorites/favoritesSlice';
import FavoriteList from './pages/Favorites/FavoritesList';
function App() {
  const dispatch = useDispatch();
  const {user} = useAuth();

  useEffect( () => {
    if(user) {
      dispatch(fetchFavorites(user.uid));
    }
  }, [user]);
  

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
          <Route path='favorites' element={<ProtectedRoute><FavoriteList/></ProtectedRoute>}></Route>

        </Route>
      </Routes>
  
  )
}

export default App
