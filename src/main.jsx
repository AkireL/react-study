import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FilterContextProvider } from './context/filterContext.jsx'

createRoot(document.getElementById('root')).render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>,
)
