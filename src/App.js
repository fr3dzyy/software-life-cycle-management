import logo from './logo.svg'
import './App.css'

import { useCookies } from 'react-cookie'

import LogRocket from 'logrocket'
LogRocket.init('znathy/my-project-name')


function App() {
  const [cookies, setCookie] = useCookies(['name'])

  function onChange() {
    let expireDate = new Date()
    expireDate.setTime(expireDate.getTime() + 1 * 3600 * 1000)

    setCookie('name', 'fr3dz', {
      expires: expireDate,
      httpOnly: false,
      path: '/',
      secure: true,
    })
    console.log(
      'Ma cookiee "' + cookies.name + '" will expire -> ' + expireDate
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={onChange}>Set Cookie</button>
          {cookies.name && <h3>Hello {cookies.name}!</h3>}
        </div>
      </header>
    </div>
  )
}

export default App
