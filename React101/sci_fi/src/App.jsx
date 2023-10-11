import logo from './logo.svg';
import './App.css';
import Profile from './rubbish'
import Controls from './Controls'

function Thing() {
  return (
    <divv>
      <h1>Any old crap we like</h1>
      <p>Random text</p>
    </divv>
  )
}

function App() {
  return (
    <div className="App">
      <Controls />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
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
      <Profile />
      <Thing />
    </div>
  );
}

export default App;
