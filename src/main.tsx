//React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//componentes
import {App} from './App'
//Styles
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
