import logo from './logo.svg';
import './App.css';
import Counter from "./counter.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count=" 0"/>
    
      </header>
    </div>
  );
}

export default App;
