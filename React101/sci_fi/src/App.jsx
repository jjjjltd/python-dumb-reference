import './App.css';
import ControlS from './Controls'
import WordSample from './WordsSample'
import ListWords from './ListWords';
import Minipost from './Minipost';
import {useState, useEffect} from 'react'

function App() {

  const [word_list, setWord_List] = useState([])

  const Update_Word_List = (word_list) => {
    console.log("Update word list inside app.js  + word_list")
    setWord_List(word_list={word_list})
  }
  

  useEffect (() => {
    <App />
  }, []);
  

  
  return (
    <div className="App">
      <Minipost dowords={setWord_List}/>
    </div>
  );
}

export default App;
