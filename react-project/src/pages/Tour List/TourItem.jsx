import { Link } from "react-router-dom"
import "./TourItem.css"
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { addFavorite, removeFavorite } from "../../features/favorites/favoritesSlice";
import { getLocalFavorites, setLocalFavorites } from "../../services/favoritesService";
import { useEffect, useState } from "react";
export default function TourItem({ tour, actionType = "favorite" }) {

  const dispatch = useDispatch();
  const {user} = useAuth();
  const favorites = useSelector(state => state.favorites.list);


  const [localFavs, setLocalFavs] = useState(getLocalFavorites() || []);

  useEffect(() => {
    setLocalFavs(getLocalFavorites());
  }, [favorites]);

  const isFavorite = user ? favorites.some(fav => fav.id === tour.id) : localFavs.some(fav => fav.id === tour.id);


  const handleFavorite = () => {
    if(user) {
      if (isFavorite) {
        dispatch(removeFavorite({uid: user.uid, tourId: tour.id}));
      }else{
        dispatch(addFavorite({uid: user.uid, tour}));
      }
    }else{
      let updatedFavs = [...localFavs];
      if(isFavorite) {
        updatedFavs = updatedFavs.filter(fav => fav.id !== tour.id);
      }else{
        updatedFavs.push(tour);
      }
      setLocalFavorites(updatedFavs);
      setLocalFavs(updatedFavs);
      alert("Favorites saved locally!");
    }
    
  }

  return (
    <div className="tour__card">
      <Link to={`/tours/${tour.id}`} className="tour__detail">
      
        <img src={tour.photo} alt={tour.name} className="tour__image" />
        <div className="tour__content">
          <h2 className="tour__title">{tour.name}</h2>
          <p className="tour__country">{tour.country}</p>
          <p className="tour__description">{tour.description}</p>
          <p className="tour__price">{tour.price.toLocaleString()} ₸</p>
          <p className="tour__rating">{tour.rating}</p>
          
        </div>
        </Link>
        {actionType === "favorite" && (
          <button className="fav__btn" onClick={handleFavorite}>
            {isFavorite ? <img src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png" alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/2589/2589197.png"/>}
          </button>
        )}
        { actionType === "remove" && (
          <button className="fav__btn" onClick={() => dispatch(removeFavorite({uid: user.uid, tourId: tour.id}))}>
            <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="" />
          </button>
        )}
        
    </div>
    
  );
}
