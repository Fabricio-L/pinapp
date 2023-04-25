import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Error from './pages/Error'
import FormClient from './pages/form/FormClient'
import Client from './pages/client/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <FormClient /> },
      { path: '/client/:id', element: <Client /> },
    ],
  },
])

export default router
