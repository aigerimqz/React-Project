import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as favoritesService from "../../services/favoritesService";
import { useAuth } from "../../context/AuthContext";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async (uid) => {
    return favoritesService.getFavorites(uid);
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async ({ uid, tour }) => {
    return await favoritesService.addFavorite(uid, tour);
    
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async ({ uid, tourId }) => {
    return await favoritesService.removeFavorite(uid, tourId);
   
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    mergeLocalFavorites: (state, action) => {
      const validItems = action.payload.filter(f => f && f.id);
      state.list = Array.from(new Map([...state.list.map(f => [f.id, f]), ...validItems.map(f => [f.id, f])]).values());
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        if (!state.list.find(f => f.id === action.payload.id)) {
          state.list.push(action.payload);
        }
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.list = state.list.filter(item => item.id !== action.payload);
      });
  },
});


export const {mergeLocalFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
