import "./App.css";
import Counter from "./components/Counter.jsx";
import Counters from "./components/Counters.jsx";
import { store } from "./redux/store.js";


import Three from "./components/Three.jsx";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <Counter />
      <button onClick={(e) => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <Three/>
      <Counters/>
    </div>
  );
}

export default App;
