import logo from './logo.svg';
import './App.css';
import Profile from './rubbish'
import Controls from './Controls'
import WordSample from './WordsSample'

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
      <WordSample />
    </div>
  );
}

export default App;
