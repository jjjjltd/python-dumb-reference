import logo from './logo.svg';
import Frontcard from './Frontcard'
import Backcard from './Backcard'
import endPoints from './api';
import React, {useEffect, useState} from 'react'

import './App.css';

function App() {

  let [toptext, setToptext] = useState("")
  let [fronttext, setFronttext] = useState("")
  let [backtext, setBacktext] = useState("")


  useEffect(() => {
    loadToptext()
    loadQuestiontext()
  }, [])

const loadToptext = async () => {
  const data = await endPoints.homeq();
  console.log(data)
  setToptext(toptext=data);
}

const loadQuestiontext = async () => {
  const data = await endPoints.qa();
  console.log(data)
  setFronttext(fronttext=data["front"]);
  setBacktext(backtext=data["back"]);
  
}


  return (
    <div className="App">
    <h1>{toptext}</h1>
      <div className="flip-card">
        <div className="flip-card-inner">
          <Frontcard text={fronttext}/>
          <Backcard text={backtext}/>
        </div>
      </div>
      <button type="button" onClick={loadQuestiontext}>Next</button>
    </div>

  );
}

export default App;
