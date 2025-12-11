import { Link } from "react-router-dom"
import "./TourItem.css"
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { addFavorite, removeFavorite } from "../../features/favorites/favoritesSlice";
export default function TourItem({ tour, actionType = "favorite" }) {

  const dispatch = useDispatch();
  const {user} = useAuth();
  const favorites = useSelector(state => state.favorites.list);

  const isFavorite = favorites.some(fav => fav.id === tour.id);


  const handleFavorite = () => {
    if(!user) return alert("Please login to add favorites");
    if(isFavorite){
      dispatch(removeFavorite({uid: user.uid, tourId: tour.id}));

    }else{
      dispatch(addFavorite({uid:user.uid, tour}));
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
            {isFavorite ? "❤️" : "🤍"}
          </button>
        )}
        { actionType === "remove" && (
          <button className="fav__btn" onClick={() => dispatch(removeFavorite({uid: user.uid, tourId: tour.id}))}>
            ❌
          </button>
        )}
        
    </div>
    
  );
}
