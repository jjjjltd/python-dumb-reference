import logo from './logo.svg';
import './App.css';

function ParseList() {

  const listsample = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ]

  const listItems = listsample.map(listsample =>
      <li key={listsample.id}>
        {listsample.title}
      </li>
  );

    return (
      <div>
        <h3>This is returned from the ParseList function.</h3>
        <ul>{listItems}</ul>
      </div>
    );

}
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
      <div>
          <p>This is returned from the MyButton function in App.JS</p>
          <button onClick={handleClick}>
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
        <ParseList />
      </div>
    );
  }
  