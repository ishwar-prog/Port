import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BackgroundVideo from './backgroundVideo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BackgroundVideo> */}
    <App />
    {/* </BackgroundVideo> */}
  </StrictMode>,
)
