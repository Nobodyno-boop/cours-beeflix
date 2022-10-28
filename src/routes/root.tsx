import { Index } from '../pages/Index'
import { RouteObject, defer, json } from 'react-router-dom'
import { fetchGenre, fetchMoviePopular, MoviePopular } from '../utils/fetchData'
import { GenrePageId } from '../pages/genre/id'
import { ErrorPage } from '../pages/error'
import { DefaultImage } from '../utils/defaultImage'
import { FavoritePage } from '../pages/favori'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
    loader: async () => {
      let genre = await fetchGenre()
      return defer({
        movie: fetchMoviePopular(),
        genre,
      })
    },
    errorElement: <ErrorPage />,
  },
  {
    path: 'genre/:id',
    element: <GenrePageId />,
    loader: async () => {
      return DefaultImage
    },
  },
  {
    path: 'favorite',
    element: <FavoritePage />,
    loader: async () => {
      return DefaultImage
    },
  },
]
