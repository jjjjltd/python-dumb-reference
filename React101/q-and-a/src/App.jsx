import logo from './logo.svg';
import Frontcard from './Frontcard'
import Backcard from './Backcard'
import endPoints from './api';
import React, {useEffect, useState} from 'react'

import './App.css';

function Buttons() {
  return (
    <div>
      <button className="Ease" id="easy">Easy</button>
      <button className="Ease" id="medium">Medium</button>
      <button className="Ease" id="hard">Hard</button>
    </div>
  )

}

function App() {

  let [toptext, setToptext] = useState("")
  let [fronttext, setFronttext] = useState("")
  let [backtext, setBacktext] = useState("")
  let [select, setSelect] = useState("dict")

  useEffect(() => {
    loadToptext()
    loadQuestiontext()
  }, [])

const loadToptext = async () => {
  const data = await endPoints.home();
  console.log(data)
  setToptext(toptext=data);
}

const loadQuestiontext = async () => {
  let data = ""
  console.log({select}['select'])
  if ({select}['select'] == "dict") {
    data = await endPoints.dict();
  } else {
    data = await endPoints.csv();
  }
  setFronttext(fronttext=data["front"]);
  setBacktext(backtext=data["back"]);
  
}

function Sel (props) {
  // API End Points, actions in server.py:
  // dict:  read from .py in dictionary format.
  // csv:  read from a csv file

  

  return (
    <div>
      <select name="source" id="source" value={select} className="select" onChange={(e=>props.setSelect(e.target.value))}>
        <option value="csv">CSV (Spanish)</option>
        <option value="dict">Dictionary</option>
        <option value="computing">Computer Science</option>
      </select>
    </div>
  )

}

  return (
    <div className="App">
      <h1>Welcome to {select} Flashcard Quiz </h1>
      <Sel setSelect={setSelect}/>
      <button type="button" onClick={loadQuestiontext}>Next</button>
      <Buttons />
      <div className="flip-card">
        <div className="flip-card-inner">
          <Frontcard text={fronttext}/>
          <Backcard text={backtext}/>
        </div>
      </div>
    </div>

  );
}

export default App;

