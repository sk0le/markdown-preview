import React, { Component } from "react";

class InputForm extends Component {
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
      <textarea
        onChange={this.handleChange}
        className="txtAreaInput"
      ></textarea>
    );
  }
}

export default InputForm;
