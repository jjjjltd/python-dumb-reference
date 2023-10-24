import './App.css';
import ControlS from './Controls'
import WordSample from './WordsSample'
import {useState} from 'react'

function App() {

  let [word_list, setWord_List] = useState(["1", "2"])

  return (
    <div className="App">
      <ControlS />
      <WordSample word_list={word_list}/>
    </div>
  );
}

export default App;
