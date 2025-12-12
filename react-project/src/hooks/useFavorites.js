import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";
import { getLocalFavorites, setLocalFavorites } from "../services/favoritesService";

export function useFavorites(tour) {


    const dispatch = useDispatch();
    const { user } = useAuth();
    const favorites = useSelector(state => state.favorites.list);

    const [localFavs, setLocalFavs] = useState(getLocalFavorites() || []);

    useEffect(() => {
        setLocalFavs(getLocalFavorites());
    }, [favorites]);

    const isFavorite = useMemo(() => {
        return user 
        ? favorites.some(fav => fav.id === tour?.id) 
        : localFavs.some(fav => fav.id === tour?.id);
    }, [user, favorites,localFavs, tour?.id]);

    const toggleFavorite = useCallback(() => {
        if(!tour) return;

        if(user) {
        if (isFavorite) {
            dispatch(removeFavorite({uid: user.uid, tourId: tour.id}));
        } else {
            dispatch(addFavorite({uid: user.uid, tour}));
        }
        } else {
        let updatedFavs = [...localFavs];
        if(isFavorite) {
            updatedFavs = updatedFavs.filter(fav => fav.id !== tour.id);
        } else {
            updatedFavs.push(tour);
        }
        setLocalFavorites(updatedFavs);
        setLocalFavs(updatedFavs);
        alert("Favorites saved locally!");
        }
    }, [user, isFavorite, localFavs, tour, dispatch]);

    return { isFavorite, toggleFavorite };
}
