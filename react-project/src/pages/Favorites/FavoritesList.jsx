import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites, removeFavorite } from "../../features/favorites/favoritesSlice";
import { useAuth } from "../../context/AuthContext";
import TourItem from "../Tour List/TourItem";
import { getLocalFavorites } from "../../services/favoritesService";
import Loader from "../../components/Loader/Loader";

export default function FavoriteList() {
  const dispatch = useDispatch();
  const { user } = useAuth();  
  const { list, loading } = useSelector((state) => state.favorites);
  const [localList, setLocalList] = useState([]);



  useEffect(() => {
    if (user) {
        dispatch(fetchFavorites(user.uid));
    }else{
        setLocalList(getLocalFavorites());
    }
  }, [user, dispatch]);

  
  if (loading) return <Loader></Loader>;

  const resList = user ? list : localList;


  if (resList.length === 0)
    return <h2 className="empty__msg">You don’t have any favorites yet</h2>;


  return (
    <div className="favorites__list">
        {resList.map((tour) => (
            <TourItem key={tour.id} tour={tour} actionType="remove"/>
        ))}
    </div>
  );
}
