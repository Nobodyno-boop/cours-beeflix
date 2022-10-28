import { configureStore } from '@reduxjs/toolkit'
import genre from './genre'
import { loadState, saveState } from './localStorage'
import movies from './movies'
import movieDetailSlice from './movieDetail'
import favorite from './favorite'
import app from './app'

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    movieDetail: movieDetailSlice,
    genres: genre,
    movies: movies,
    favorites: favorite,
    app: app,
  },
  preloadedState: {
    movies: persistedState?.movies ?? {},
    favorites: persistedState?.favorites ?? { favorites: [] },
    app: persistedState?.app ?? { loading: true },
  },
})

store.subscribe(() =>
  saveState({
    movies: {
      ...store.getState().movies,
    },
    favorites: {
      ...store.getState().favorites,
    },
    app: {
      ...store.getState().app,
    },
  })
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
