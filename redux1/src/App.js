import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import increment from "./actions/increment";
import decrement from "./actions/decrement";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Number: {counter}</div>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
