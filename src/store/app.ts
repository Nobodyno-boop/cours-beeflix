import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  loading: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  loading: false,
}

export const FavoriteSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { update } = FavoriteSlice.actions

export default FavoriteSlice.reducer
