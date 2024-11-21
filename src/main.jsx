import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Create a BrowserRouter instance and pass routes to it.
const router = createBrowserRouter([
  {
    path: '/vite-react-router/',
    element: <App/>,
    children: [
      { path: '/vite-react-router/', element: <Home /> },
      { path: '/vite-react-router/login', element: <Login /> },
      { path:'/vite-react-router/register', element: <Register /> }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
