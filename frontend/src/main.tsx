import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@/components/Providers/theme-provider.tsx'
import { Navigation } from './components/Navigation.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className=' md:hidden '>
        <Navigation />
      </div>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
