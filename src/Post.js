import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
      // to do confirmation message
      // messagePosted: 'Message Posted'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("before state text:", this.state.text);

    this.setState({ text: event.target.value });
    //console.log("after set State:", this.state.text);
    //why are the logs the same?
  }

  handleSubmit(event) {
    console.log("this state text: ", this.state.text);
    this.props.onPost(this.state.text);
    this.state.text = "";
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
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <button id="submit" class="btn btn-default">
          Post to board
        </button>
      </form>
      // <div>
      //   <div class="form-group">
      //     <label>Message:</label>
      //     <textarea
      //       id="message"
      //       type="text"
      //       class="form-control"
      //       value={this.state.text}
      //       onChange={this.updateMessage}
      //     />
      //   </div>
      //   <button id="submit" class="btn btn-default" onSubmit={this.postMessage}>
      //     Post to board
      //   </button>
      // </div>
    );
  }
}

export default Post;
