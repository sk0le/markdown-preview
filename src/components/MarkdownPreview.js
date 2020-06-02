import React, { Component } from "react";
import Output from "./Output";
import InputForm from "./InputForm";

class MarkdownPreview extends Component {
  render() {
    return (
      <div className="markdownPreview">
        <InputForm />
        <Output />
      </div>
    );
  }
}

export default MarkdownPreview;
