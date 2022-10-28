export type language = 'en-US' | 'fr-FR'

export type Movie = {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type Page = {
  page: number
  total_pages: number
}

export type MoviePopular = Page & {
  results: Movie[]
}

export type Genre = {
  id: number
  name: string
}

export const fetchMoviePopular = async (
  data: { page: number } = { page: 1 }
): Promise<MoviePopular> => {
  return fetchData('/movie/popular', data)
}

export const fetchGenre = async () => {
  return fetchData('/genre/movie/list', null)
}

const fetchData = async (path: string, data: any): Promise<any> => {
  if (data != null && typeof data === 'object') {
    data =
      '&' +
      Object.keys(data)
        .map((x) => {
          let v = data[x]
          return `${x}=${v}`
        })
        .join('&')
  }
  if (data === null) {
    data = ''
  }

  return fetch(
    'https://api.themoviedb.org/3' +
      path +
      '?api_key=d96b2836b2a64753bb8c7ebc760e2ab0' +
      '&language=fr' +
      data,

    {}
  )
    .then((res) => res.json())
    .catch((e) => console.error(e))
}
