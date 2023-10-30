import logo from './logo.svg';
import Frontcard from './Frontcard'
import Backcard from './Backcard'

import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Flash Card Quiz</h1>
      <div class="flip-card">
        <div class="flip-card-inner">
      <Frontcard />
      <Backcard />
        </div>
      </div>
    </div>

  );
}

export default App;
