import { useState } from 'react'
import { add } from '../../store/favorite'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { open } from '../../store/movieDetail'
import { Movie, MoviePopular } from '../../utils/fetchData'
import './thumbail.scss'

export const Thumbail: React.FC<{ movies: MoviePopular; isMini?: boolean }> = ({
  movies,
  isMini = true,
}) => {
  // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  const [movie, setMovie] = useState(movies.results[0]) as [
    Movie,
    (x: any) => void
  ]

  const dispatch = useAppDispatch()
  const favorites = useAppSelector((s) => s.favorites.favorites)

  const nextThird = () => {
    const cindex = movies.results.findIndex((x) => x.id === movie.id)
    const current = movies.results.slice(cindex + 1)
    return [...current, ...movies.results].slice(0, 3)
  }

  const moveMovie = (x: Movie) => {
    setMovie(x)
  }

  const displayInfo = () => {
    dispatch(open(movie))
  }

  const favorite = () => {
    dispatch(add(movie))
  }

  return (
    <>
      <div className="thumbail">
        <div className="thumbail-current">
          <img
            src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
            alt=""
          />
          <h1>{movie.title}</h1>
          <div className="details">
            <div className="buttons">
              <div role="button" className="watch">
                <span>Watch</span>
              </div>
              {favorites.find((m) => m.id === movie.id) ? (
                <div role="button" className="favorite" onClick={favorite}>
                  <i className="bx bx-list-check"></i>
                </div>
              ) : (
                <div role="button" className="favorite" onClick={favorite}>
                  <i className="bx bx-list-plus"></i>
                </div>
              )}
              <div role="button" className="info" onClick={displayInfo}>
                <i className="bx bx-info-circle"></i>
              </div>
            </div>
          </div>
          <div className="nexts">
            {nextThird().map((x, i) => {
              return (
                <div className="mini" key={i} onClick={() => moveMovie(x)}>
                  <img
                    src={
                      'https://image.tmdb.org/t/p/original' + x.backdrop_path
                    }
                    alt=""
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
