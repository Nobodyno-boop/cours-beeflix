import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../utils/fetchData'

interface FavoriteState {
  favorites: Movie[]
}

// Define the initial state using that type
const initialState: FavoriteState = {
  favorites: [],
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Movie>) => {
      if (!state.favorites) {
        state.favorites = []
      }
      state.favorites.push(action.payload)
    },
    remove: (state, action: PayloadAction<Movie>) => {
      if (!state.favorites) {
        state.favorites = []
      }
      state.favorites = state.favorites.filter((x) => x !== action.payload)
    },
  },
})

export const { add } = FavoriteSlice.actions

export default FavoriteSlice.reducer
