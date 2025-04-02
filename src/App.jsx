import reactLogo from './assets/react.svg'
import './App.css'
import { Form } from './components/Form'
import UseExample from './components/useExample'
import UserContextExample from './class/UseContextExample'
import { use } from 'react'
import { UserContext } from "./context/user";

function App() {
    const {name, isLogged, updateUser} = use(UserContext);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Form></Form>

      <UseExample></UseExample>
      <UserContextExample></UserContextExample>
      <footer style={{position:"fixed", bottom: 0}}>
        {
          isLogged ?
          <p>Esta logueado</p>
          : <p>No esta logeado</p>
        }
      </footer>
    </>
  )
}

export default App
