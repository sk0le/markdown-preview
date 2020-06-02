import React from "react";
import "./App.css";
import MarkdownPreview from "./components/MarkdownPreview";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MarkdownPreview />
    </div>
  );
}

export default App;
