/**
* Post Component
* Post a message to the message board. Handles input to the text box
* and submit of Post to board
**/
import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handles when text is typed into the text area
  handleChange(event) {
    //console.log("before state text:", this.state.text);
    this.setState({ text: event.target.value });
    //console.log("after set State:", this.state.text);
    //why are the logs the same?
  }

  //if text is not blank, post message and clear text afterwards
  handleSubmit(event) {
    if (this.state.text !== "") {
      this.props.onPost(this.state.text);
      this.setState({ text: "" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label>Message:</label>
          <textarea
            id="message"
            type="text"
            class="form-control"
            value={this.state.text || ""}
            onChange={this.handleChange}
          />
        </div>
        <button id="submit" class="btn btn-default">
          Post to board
        </button>
      </form>
    );
  }
}

export default Post;
