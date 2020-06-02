import React from "react";
import "./App.css";
import MarkdownPreview from "./components/MarkdownPreview";
import Navbar from "./components/Navbar";
import InputAndOutputText from "./components/InputAndOutputText";

function App() {
  return (
    <div className="App">
      <Navbar />
      <InputAndOutputText />
      <MarkdownPreview />
    </div>
  );
}

export default App;
