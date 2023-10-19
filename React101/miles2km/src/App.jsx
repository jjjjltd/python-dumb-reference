import logo from './logo.svg';
import './App.css';
import Intro from './intro.jsx';
import LogRandom from './LogRandom.jsx'
import Title from './Title.jsx'
import Miles from './Miles.jsx'
import CalcButton from './CalcButton.jsx'

function KM () {
  return (
    <div className="kmcalc">
      <table>
        <tr>
          <td>is equal to</td>
          <td>0</td>
          <td>Km</td>
        </tr>
      </table>
    </div>

  )
    
}


function App() {
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
