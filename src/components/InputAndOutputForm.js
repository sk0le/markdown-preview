import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class InputAndOutputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "# Start by editing this" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <textarea
          onChange={this.handleChange}
          className="txtAreaInput"
          value={this.state.value}
        ></textarea>
        <div className="output">
          <ReactMarkdown source={this.state.value} />
        </div>
      </>
    );
  }
}

export default InputAndOutputForm;
