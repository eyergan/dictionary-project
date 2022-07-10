import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Evy Yergan and Open Sourced</small>
      </footer>
    </div>
  );
}

export default App;
