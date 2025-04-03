import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './basic/context/User'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
)
