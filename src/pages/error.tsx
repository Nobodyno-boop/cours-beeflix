import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  let error = useRouteError()
  console.error(error)
  return <>hey</>
}
