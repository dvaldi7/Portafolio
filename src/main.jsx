import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App /> 
    </HashRouter>
  </StrictMode>
)
