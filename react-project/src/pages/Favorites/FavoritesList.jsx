import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites, removeFavorite } from "../../features/favorites/favoritesSlice";
import { useAuth } from "../../context/AuthContext";
import TourItem from "../Tour List/TourItem";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const { user } = useAuth();  
  const { list, loading } = useSelector((state) => state.favorites);

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.uid));
    }
  }, [user, dispatch]);

  if (!user) return <p>Log in please</p>;
  if (loading) return <p>Loading...</p>;

  if (list.length === 0)
    return <h2 className="empty__msg">You don’t have any favorites yet</h2>;


  return (
    <div className="favorites__list">
        {list.map((tour) => (
            <TourItem key={tour.id} tour={tour} actionType="remove"/>
        ))}
    </div>
  );
}
