import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

export const Main = () => {
  const elementRoutes = useRoutes(routes)
  return (
    elementRoutes
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  </React.StrictMode>,
)
