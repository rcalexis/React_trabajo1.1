import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // la etiqueta stric sirve para que se ejecuten los errores que no alcanzamos a ver 
  <StrictMode> 
    <App />
  </StrictMode>,
)
