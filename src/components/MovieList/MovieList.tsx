import { Link, useLoaderData } from 'react-router-dom'
import { useAppDispatch } from '../../store/hook'
import { open } from '../../store/movieDetail'
import { classname } from '../../utils/classname'
import { Genre, Movie } from '../../utils/fetchData'
import { useState, useEffect } from 'react'
import './movieList.scss'
export const MovieList: React.FC<{
  movies: Movie[]
  limit?: number
  genre?: Genre
  maxPerList?: number
}> = ({ movies, limit = -1, genre = null, maxPerList = 5 }) => {
  const dispatch = useAppDispatch()
  const [items, SetItems] = useState<Movie[]>([])
  const [index, setIndex] = useState(0)

  const openDetail = (movie: Movie) => {
    dispatch(open(movie))
  }
  const d: any = useLoaderData()

  if (limit === -1) {
    limit = movies.length
  } else {
    movies = movies.slice(0, limit)
  }

  const goTo = (n: number) => {
    if (n <= 0) {
      if (index === 0) {
        setIndex(movies.length - 1)
      } else {
        setIndex((n) => n - 1)
      }
    } else {
      if (index + 1 >= limit) {
        setIndex(0)
      } else {
        setIndex((n) => n + 1)
      }
    }
  }
  useEffect(() => {
    // Infinite array
    SetItems([...movies.slice(index), ...movies].slice(0, maxPerList))

    return () => {}
  }, [index, maxPerList, movies])

  return (
    <div className={classname('list-movie', { genre: genre })}>
      {genre ? (
        <>
          <Link to={'/genre/' + genre.id} className="effect">
            <h1 className="title">{genre.name}</h1>
          </Link>
          <div className="content">
            <div className="arrow left" onClick={() => goTo(-1)}>
              <i className="bx bx-left-arrow-alt"></i>
            </div>
            <div className="movies">
              {items.map((movie, i) => (
                <div
                  key={i}
                  onClick={() => openDetail(movie)}
                  className="movie"
                >
                  {movie.backdrop_path ? (
                    <img
                      src={
                        'https://image.tmdb.org/t/p/original' +
                        movie.backdrop_path
                      }
                      alt={movie.title}
                    />
                  ) : (
                    <img src={`data:image/svg+xml;utf8,${d}`} alt="" />
                  )}
                </div>
              ))}
            </div>
            <div className="arrow right" onClick={() => goTo(1)}>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
        </>
      ) : (
        <div className="content">
          {movies.map((movie, i) => (
            <div key={i} onClick={() => openDetail(movie)} className="movie">
              {movie.backdrop_path ? (
                <img
                  src={
                    'https://image.tmdb.org/t/p/original' + movie.backdrop_path
                  }
                  alt={movie.title}
                />
              ) : (
                <img src={`data:image/svg+xml;utf8,${d}`} alt="" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
