import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }
  return (
      <div>
          <p>This is returned from the MyButton function in App.JS</p>
          <button onClick={handleClick}>
              I'm a button
          </button>
          <p>The count variable, set by setCount = {count}.</p>
      </div>
  );
}

function MyButton2() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }
  return (
      <div>
          <p>This is returned from the MyButton2 function in App.JS</p>
          <button onClick={handleClick}>
              Clicked {count} times
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
            Learn React Here!!!
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
        <MyButton2 />
        <MyButton2 />
        <AboutPage />
        <ParseList />
      </div>
    );
  }
  