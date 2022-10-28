import { fetchMoviePopular } from '../utils/fetchData'
import { useLoaderData, Await } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Layout } from '../layout/layout'
import { Thumbail } from '../components/Thumbail/Thumbail'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { set } from '../store/genre'
import { MovieList } from '../components/MovieList/MovieList'
import './index.scss'
import { GenreList } from '../components/GenreList/GenreList'
export const Index = () => {
  const movie: { movie: any; genre: any } = useLoaderData() as {
    movie: any
    genre: any
  }

  const dispatch = useAppDispatch()
  dispatch(set(movie.genre.genres))

  return (
    <>
      <Layout>
        <React.Suspense fallback={'Loading...'}>
          <Await
            resolve={movie.movie}
            errorElement={<div>Could not load reviews 😬</div>}
            children={(resolvedReviews) => (
              <div>
                <Thumbail isMini={false} movies={resolvedReviews} />
                <div className="lists">
                  <GenreList />
                </div>
              </div>
            )}
          />
        </React.Suspense>
      </Layout>
    </>
  )
}
