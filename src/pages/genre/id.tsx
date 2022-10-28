import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieList } from '../../components/MovieList/MovieList'
import { Layout } from '../../layout/layout'
import { useAppSelector } from '../../store/hook'
import { Movie } from '../../utils/fetchData'
import './id.scss'

export const GenrePageId = () => {
  let { id } = useParams()
  let rid = 1
  if (id && /[0-9]*/.test(id)) {
    rid = Number(id)
  }

  const movies = useAppSelector((state) => state.movies.movies)
  const genres = useAppSelector((state) => state.genres.genres)
  const genre = genres.find((x) => x.id === rid)
  const moviesByGenre = movies.filter((x) => x.genre_ids.includes(rid))
  const chunckedMovie = moviesByGenre.reduce((all: any, one: any, i) => {
    const ch = Math.floor(i / 50)
    all[ch] = [].concat(all[ch] || [], one)
    return all
  }, [])

  console.log(chunckedMovie)

  return (
    <Layout>
      <div className="contents">
        {genre ? <h1 className="title">{genre.name}</h1> : null}

        {chunckedMovie.map(
          (movies: Movie[], i: React.Key | null | undefined) => (
            <MovieList key={i} movies={movies as Movie[]}></MovieList>
          )
        )}
      </div>
    </Layout>
  )
}
