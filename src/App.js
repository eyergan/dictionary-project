import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App mt-5">
      <header className="App-header">
        <h1>📚 dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="cloud" />
      </main>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <a href="https://evyyergan.com" target="_blank" rel="noreferrer">
            Evy Yergan
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/eyergan/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
