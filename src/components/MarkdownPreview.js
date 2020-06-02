import React, { Component } from "react";
import InputAndOutputForm from "./InputAndOutputForm";

class MarkdownPreview extends Component {
  render() {
    return (
      <div className="markdownPreview">
        <InputAndOutputForm />
      </div>
    );
  }
}

export default MarkdownPreview;
