import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className=" bg-slate-600  w-80 h-80">
      <header className="App-header">
        <img src={logo} className=" h-10 w-10" alt="logo" />
        <p className=" bg-slate-600">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
