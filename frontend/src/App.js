import logo from './logo.svg';
import './App.css';

function App() {
  const getFetch = () => {
    return fetch('api/crusade').then(alert )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload PROD.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getFetch}>GET  FETCH</button>
      </header>
    </div>
  );
}

export default App;
