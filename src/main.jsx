import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root'), {
  identifierPrefix: 'react-'
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
