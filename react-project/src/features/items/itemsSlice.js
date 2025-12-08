import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as itemsService from "../../services/itemService";

const initialState = {
  list: [],
  selectedItem: null,
  loadingList: false,
  loadingItem: false,
  errorList: null,
  errorItem: null,
  query: "",
  count: 0,
  next: null,
  previous: null,
};

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (params) => {
    return itemsService.searchItems(params);
  }
);

export const fetchItemById = createAsyncThunk(
  "items/fetchItemById",
  async (id) => {
    return itemsService.getItemById(id);
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload.results || [];
        state.count = action.payload.count || 0;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.error.message;
      })
      .addCase(fetchItemById.pending, (state) => {
        state.loadingItem = true;
        state.errorItem = null;
        state.selectedItem = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loadingItem = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        state.loadingItem = false;
        state.errorItem = action.error.message;
      });
  },
});

export default itemsSlice.reducer;
