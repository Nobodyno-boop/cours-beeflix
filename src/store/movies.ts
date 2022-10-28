import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../utils/fetchData'

interface MovieState {
  movies: Movie[]
  currentPage: number
  lastPage: number
  rLastPage: number
}

// Define the initial state using that type
const initialState: MovieState = {
  movies: [],
  currentPage: 1,
  lastPage: -1,
  rLastPage: -1,
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        movies: Movie[]
        lastpage: number
        current: number
      }>
    ) => {
      if (!state.movies) {
        state.movies = []
      }

      state.movies.push(...action.payload.movies)
      state.currentPage = action.payload.current
      state.lastPage = action.payload.lastpage
    },
  },
})

export const { add } = movieSlice.actions

export default movieSlice.reducer
