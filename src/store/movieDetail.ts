import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../utils/fetchData'

interface CounterState {
  display: boolean
  movie: Movie | null
}

// Define the initial state using that type
const initialState: CounterState = {
  display: false,
  movie: null,
}

export const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload
      state.display = true
    },
    close: (state) => {
      state.display = false
      state.movie = null
    },
  },
})

export const { open, close } = movieDetailSlice.actions

export default movieDetailSlice.reducer
