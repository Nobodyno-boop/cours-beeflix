import { fetchMoviePopular } from '../utils/fetchData'
import { useLoaderData, Await } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Layout } from '../layout/layout'
import { Thumbail } from '../components/Thumbail/Thumbail'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { set } from '../store/genre'
import './favorite.scss'
import { MovieList } from '../components/MovieList/MovieList'
export const FavoritePage = () => {
  const fav = useAppSelector((s) => s.favorites.favorites)

  return (
    <>
      <Layout>
        <div className="favorite">
          <h1>Listes des favoris</h1>

          <div className="content">
            <MovieList movies={fav} />
          </div>
        </div>
      </Layout>
    </>
  )
}
