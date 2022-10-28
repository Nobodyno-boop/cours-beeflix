import { Layout } from '../layout/layout'
import { useAppSelector } from '../store/hook'
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
