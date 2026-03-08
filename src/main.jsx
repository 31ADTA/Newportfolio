import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { initScrollAnimations, initNavbarScroll, initHamburgerMenu } from './useScrollAnimation'

// Initialize animations after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initNavbarScroll();
  initHamburgerMenu();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
