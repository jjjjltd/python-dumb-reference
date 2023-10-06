import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}: Output from Profile function (as described).</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function ParseList() {

  const listsample = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
    { title: "Onion", id: 4 },
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

function OddRender () {
  return (
  <div>
      <h3>That is an odd number</h3>
      <p></p>
      <break />
      <img src="https://2.bp.blogspot.com/-Yy-ClpieHIM/V2y-oyBkkBI/AAAAAAAAAy0/n1-syp2OI208KWc226olVGYifRkWV6dawCLcB/s1600/yikes.png" className="yikes" alt="logo" />
      <a 
            className="app-link"
            href="https://2.bp.blogspot.com/-Yy-ClpieHIM/V2y-oyBkkBI/AAAAAAAAAy0/n1-syp2OI208KWc226olVGYifRkWV6dawCLcB/s1600/yikes.png"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
  </div>
  )
}

function MyButton() {

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1)
  }

  const oddeven = (count % 2 === 0) ? <p>Even number entered.</p> : <OddRender /> 
  return (
      <div>
          <h2>This is returned from the MyButton function in App.JS</h2>
          <button onClick={handleClick}>
              I'm a button
          </button>
          <p>The count variable, set by setCount = {count}.</p>
          <h2>This is returned based on oddeven conditioning in MyButton function.</h2>
          {oddeven}
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
          <h2>This is returned from the MyButton2 function in App.JS</h2>
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
          <img src={logo} className="App-logo" alt="logo" 
          style={{height: 150}}/>
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
        <Profile />
        <MyButton />
        <MyButton2 />
        <MyButton2 />
        <AboutPage />
        <ParseList />
      </div>
    );
  }
  