import logo from './logo.svg';
import './App.css';

function MyButton() {
    return (
        <div>
            <p>This is returned from the MyButton function in App.JS</p>
            <button>
                I'm a button
            </button>
        </div>
    );
  }

  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }

  function StartApp() {
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
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <h2>See below for more stuff after the default logo display</h2>
        <StartApp />
        <MyButton />
        <AboutPage />
      </div>
    );
  }
  