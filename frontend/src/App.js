import Bulbapedia from "./components/Bulbapedia.js";
import logo from "./pokemon-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" />
      <Bulbapedia />
    </div>
  );
}

export default App;
