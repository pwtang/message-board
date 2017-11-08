import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.handleThumbsUp = this.handleThumbsUp.bind(this);
    this.handleThumbsDown = this.handleThumbsDown.bind(this);
    this.handleTrash = this.handleTrash.bind(this);
  }

  handleThumbsUp() {
    this.props.onLike(this.props.id);
  }

  handleThumbsDown() {
    this.props.onDislike(this.props.id);
  }

  handleTrash() {
    this.props.onDelete(this.props.id);
  }

  render() {
    let cts = this.props.dateTime;
    let mDate = new Date(cts).toLocaleString();
    return (
      <div>
        <li>
          {/* Hello 👋  */}
          {this.props.text}
          <i class="fa fa-trash pull-right delete" onClick={this.handleTrash} />
          <i class="pull-right"> {mDate} </i>
          <i
            class="fa fa-thumbs-down pull-right"
            onClick={this.handleThumbsDown}
          />
          <i class="fa fa-thumbs-up pull-right" onClick={this.handleThumbsUp} />
          <div class="pull-right">{this.props.likes}</div>
        </li>
      </div>
    );
  }
}

export default Message;
