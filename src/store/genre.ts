import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Genre } from '../utils/fetchData'

interface CounterState {
  genres: Genre[]
}

// Define the initial state using that type
const initialState: CounterState = {
  genres: [],
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload
    },
  },
})

export const { set } = genresSlice.actions

export default genresSlice.reducer
