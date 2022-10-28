import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/root'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { MovieChecker } from './components/MovieChecker/MovieChecker'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter(routes, {
  basename: '/cours-beeflix/',
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MovieChecker />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
