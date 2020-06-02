import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const input = "# Hello";

class Output extends Component {
  render() {
    return (
      <div className="output">
        <ReactMarkdown source={input} />
      </div>
    );
  }
}

export default Output;
