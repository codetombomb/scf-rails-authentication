import logo from './logo.svg';
import './App.css';
import react, {useEffect, useState} from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
      .then((resp) => resp.json())
      .then((data) => setUser(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
