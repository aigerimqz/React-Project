import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as favoritesService from "../../services/favoritesService";

const initialState = {
  items: [],
  loading: false,
  error: null,
};


export const fetchFavorites = createAsyncThunk(

    "favorites/fetchFavorites",
    async (uid) => {
        return favoritesService.getUserFavorites(uid);
    }
);

export const addFavoriteItem = createAsyncThunk(

    "favorites/addFavoriteItem",
    async ({ uid, itemId }) => {
        await favoritesService.addUserFavorite(uid, itemId);
        return itemId;
    }
);

export const removeFavoriteItem = createAsyncThunk(
    "favorites/removeFavoriteItem",
    async ({ uid, itemId }) => {
        await favoritesService.removeUserFavorite(uid, itemId);
        return itemId;
    }
)

const favoritesSlice = createSlice({
    
    name: "favorites",
    initialState,
    reducers: {
        addLocalFavorite: (state, action) => {
        state.items.push(action.payload);
        },
        removeLocalFavorite: (state, action) => {
        state.items = state.items.filter(id => id !== action.payload);
        },
        setLocalFavorites: (state, action) => {
        state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFavorites.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(addFavoriteItem.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(removeFavoriteItem.fulfilled, (state, action) => {
            state.items = state.items.filter(id => id !== action.payload);
        });
    }
})

export const { addLocalFavorite, removeLocalFavorite, setLocalFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
