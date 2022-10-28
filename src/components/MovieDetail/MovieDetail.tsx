import { Link } from 'react-router-dom'
import { add } from '../../store/favorite'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { close } from '../../store/movieDetail'
import { Movie } from '../../utils/fetchData'
import './movieDetail.scss'
export const MovieDetail: React.FC<{ movie: Movie }> = ({ movie }) => {
  const dispatch = useAppDispatch()
  const genres = useAppSelector((state) => state.genres.genres)

  const movieGenre = genres.filter((x) => movie.genre_ids.includes(x.id))
  const favorites = useAppSelector((s) => s.favorites.favorites)

  const movieOut = () => {
    let date = new Date(movie.release_date)

    if (Date.now() >= date.getDate()) {
      return 'Regarder dès maintenant !'
    }

    return 'a'
  }

  const closeDetail = () => {
    dispatch(close())
  }

  const favorite = () => {
    dispatch(add(movie))
  }

  return (
    <>
      <div className="movie-detail">
        <div className="header">
          <h1>{movie.title}</h1>
          <div role="button" className="close" onClick={closeDetail}>
            <i className="bx bx-x"></i>
          </div>
        </div>
        <img
          src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
          alt=""
        />
        <div className="details">
          <div className="a">
            <div className="detail">
              <div className="year">{movieOut()}</div>
              <div className="genres">
                {movieGenre.map((genre) => (
                  <Link to={'/genre/' + genre.id} onClick={closeDetail}>
                    <div key={genre.id} className="genre">
                      {genre.name}
                    </div>
                  </Link>
                ))}
                {movieGenre.map((genre) => (
                  <div key={genre.id} className="genre">
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
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
            </div>
          </div>
          <div>
            <h3>Description </h3>
            <div className="text">{movie.overview}</div>
          </div>
        </div>
      </div>
    </>
  )
}
