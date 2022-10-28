import { useAppSelector } from '../../store/hook'
import { MovieList } from '../MovieList/MovieList'

export const GenreList = () => {
  const movies = useAppSelector((s) => s.movies.movies)
  const genres = useAppSelector((s) => s.genres.genres)

  const movieByGenre = genres.map((genre) => {
    return {
      ...genre,
      movies: movies.filter((x) => x.genre_ids.includes(genre.id)),
    }
  })

  return (
    <>
      {movieByGenre.slice(0, 10).map((movies) => (
        <MovieList
          key={movies.id}
          movies={movies.movies}
          limit={10}
          genre={{ id: movies.id, name: movies.name }}
        />
      ))}
    </>
  )
}
