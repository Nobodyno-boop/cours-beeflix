import useEvent from '@react-hook/event'
import { Menu } from '../components/Menu/Menu'
import { useEffect, useState } from 'react'
import './layout.scss'
import { MovieDetail } from '../components/MovieDetail/MovieDetail'
import { Movie } from '../utils/fetchData'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../store/hook'

declare global {
  interface WindowEventMap {
    displayDetailMovie: CustomEvent<{ movie: Movie }>
    closeDetailMovie: CustomEvent<{}>
  }
}

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const movieDetail = useAppSelector((state) => state.movieDetail)
  const app = useAppSelector((s) => s.app)
  useEffect(() => {
    console.log(movieDetail)
  }, [movieDetail])

  return (
    <>
      {app.loading ? null : <Menu></Menu>}

      {movieDetail.display ? (
        <div>
          <div className="blur-bg"></div>
          <MovieDetail movie={movieDetail.movie as Movie} />
        </div>
      ) : null}
      <div className="home-section">{app.loading ? null : children}</div>
    </>
  )
}
