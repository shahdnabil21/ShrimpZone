import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from './components/Context/CartContext.jsx'
// import { CartProvider } from './components/Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </StrictMode>
  
)
