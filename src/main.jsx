import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from 'react-router-dom';
import router from './router'


// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)