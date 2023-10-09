import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Testjsx from './testimport';

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

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <div>
        <h2>Colour conditioning from ShoppingList function</h2>
        <ul>{listItems}</ul>
      </div>
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

    function Input1() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
  
    return (
      <div>
        <h2>Input1 function, returning name entry to handleSubmit for Alert display.</h2>
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }

  function Input2() {
    const [inputs, setInputs] = useState({});
  
    const handleChange2 = (event) => {
      const name = event.target.username;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      console.log(values => ({...values, [name]: value}))
    }
  
    const handleSubmit2 = (event) => {
      event.preventDefault();
      alert("Hitting this point.", event.target.username)
      alert(inputs);
    }
  
    return (
      <div>
        <h2>Input2 function, returning 2 entries to handleSubmit for Alert display.</h2>
        <form onSubmit={handleSubmit2}>
          <label>Enter your name:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange2}
          />
          </label>
          <label>Enter your age:
            <input 
              type="number" 
              name="age" 
              value={inputs.age || ""} 
              onChange={handleChange2}
            />
            </label>
            <input type="submit" />
        </form>
      </div>
    )
  }

  
  export default function MyApp() {
    const [count_shared, setCount] = useState(0);

    function handleClick3() {
      setCount(count_shared + 1);
    }  

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
        <ShoppingList />
        <Testjsx />
        <h2>MyButton3, shared counter, needs later remediation.</h2>
        <MyButton3 count_shared={count_shared} onclick={handleClick3}/>
        <MyButton3 count_shared={count_shared} onclick={handleClick3}/>
        <Input1 />
        <Input2 />
      </div>
    );
  }
  
  function MyButton3({ count_shared, onClick }) {
    return (
      <div>
        <p>Count shared {count_shared}</p>
        <button onClick={onClick}>
          Clicked {count_shared} times
        </button>
        </div>
    );
  }