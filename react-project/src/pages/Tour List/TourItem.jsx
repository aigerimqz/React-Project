import { Link } from "react-router-dom"
import "./TourItem.css"
import { useFavorites } from "../../hooks/useFavorites";
export default function TourItem({ tour, actionType = "favorite" }) {

  const {isFavorite, toggleFavorite} = useFavorites(tour);


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
          <button className="fav__btn" onClick={toggleFavorite}>
            {isFavorite ? <img src="https://cdn-icons-png.flaticon.com/512/2589/2589175.png" alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/2589/2589197.png"/>}
          </button>
        )}
        { actionType === "remove" && (
          <button className="fav__btn" onClick={toggleFavorite}>
            <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="" />
          </button>
        )}
        
    </div>
    
  );
}
