import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";

function App() {
  const name = "REIN";
  return (
    <div className="App">
      <header className="App-header">
        <Player />
      </header>
    </div>
  );
}

export default App;
