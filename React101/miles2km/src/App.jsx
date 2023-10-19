import './App.css';
import Title from './Title.jsx'
import Miles from './Miles.jsx'
import KM from './KM.jsx'
import CalcButton from './CalcButton.jsx'
import { useState, useEffect} from 'react'

function App() {

  const [miles, setMiles] = useState(0)

  return (
    <div className="App">
        <Title />
        <Miles />
        <KM />
        <CalcButton />
    </div>
    
  );
}

export default App;
