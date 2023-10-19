import './App.css';
import { useState } from 'react'

function Main () {

  let [miles, setMiles] = useState(0)
  // let [kms, setKms] = useState(0)

  // setKms(kms=miles*1.62)

  return (
    <div className="main">
      <div className="title">
        <h1>Miles to KM Conversion</h1>
      </div>
      <div className="miles">
        <input name="mile" 
        type="number"
        value={miles}
        onChange={(e)=>setMiles(e.target.value)}>

        </input>
        <label>Miles</label>
      </div>
      <div className="kms">
        <table>
          <tr>
            <td>Is converted to</td>
            <td>0</td>
            <td>KMs</td>
          </tr>
        </table>
      </div>
      <div className="calcbutton">
        <button>Calculate</button>
      </div>


    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
