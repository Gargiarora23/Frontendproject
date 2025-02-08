import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Content from './Components/Content.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <Navbar/>
  
    <App />
    <Content/>
  </BrowserRouter>
  </>
)
