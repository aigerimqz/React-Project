import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFavorite, fetchFavorites, mergeLocalFavorites } from "./features/favorites/favoritesSlice";
import { getLocalFavorites, setLocalFavorites } from "./services/favoritesService";
import { useAuth } from "./context/AuthContext";

export default function AppInitializer() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user.uid)).then(() => {
        const localFavs = getLocalFavorites();
        if (localFavs.length > 0) {
          dispatch(mergeLocalFavorites(localFavs));
          localFavs.forEach(fav => dispatch(addFavorite({ uid: user.uid, tour: fav })));
          setLocalFavorites([]);
          alert("Your local favorites were merged with your account.");
        }
      });
    }
  }, [user, dispatch]);

  return null;
}
