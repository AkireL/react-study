import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FilterContextProvider } from './context/filterContext.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>,
)
