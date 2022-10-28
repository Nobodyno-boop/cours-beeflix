import { useAppDispatch, useAppSelector } from '../../store/hook'
import { useEffect, useState } from 'react'
import { fetchMoviePopular } from '../../utils/fetchData'
import { add } from '../../store/movies'
import './movieChecker.scss'
import { update } from '../../store/app'

export const MovieChecker = () => {
  let app = useAppSelector((s) => s.app)
  let cp = useAppSelector((app) => app.movies.currentPage)

  let dispatch = useAppDispatch()

  useEffect(() => {
    let interval: any = setInterval(() => {
      let page = cp ? cp + 1 : 1
      if (page > 50) {
        console.log('one')

        dispatch(update(false))
        return clearInterval(interval)
      } else {
        fetchMoviePopular({ page: page }).then((x) => {
          dispatch(
            add({ movies: x.results, current: x.page, lastpage: x.total_pages })
          )
        })
      }

      console.log('again')
    }, 100)
    return () => clearInterval(interval)
  }, [cp, dispatch])

  return (
    <>
      {app.loading ? (
        <div id="loading">
          <h1>Loading.</h1>
          <i className="bx bx-loader-circle bx-spin bx-flip-horizontal"></i>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
