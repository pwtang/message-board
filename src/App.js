import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import uuid from "uuid";
import Message from "./Message";
import Post from "./Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: uuid.v4(), text: "First", likes: 0 },
        { id: uuid.v4(), text: "Second", likes: 1 },
        { id: uuid.v4(), text: "Third", likes: 2 },
        { id: uuid.v4(), text: "Fourth", likes: 3 },
        { id: uuid.v4(), text: "Fifth", likes: 4 }
      ],
      sortAsc: "true"
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.toggleFlag = this.toggleFlag.bind(this);
  }

  handleLike(id) {
    const message = this.state.messages.find(message => message.id === id);
    message.likes = message.likes + 1;
    this.setState({
      message: this.state.messsages
    });
  }

  handleDislike(id) {
    const message = this.state.messages.find(message => message.id === id);
    message.likes = message.likes - 1;
    this.setState({
      message: this.state.messages
    });
  }

  handleDelete(id) {
    const newMessages = this.state.messages.filter(
      message => message.id !== id
    );
    this.setState({
      messages: newMessages
    });
  }

  handlePost(text) {
    // console.log("handlePost method");
    const message = { id: uuid.v4(), text: text, likes: 0 };
    console.log("new message: ", message);
    this.state.messages.push(message);
    console.log("push");
    this.setState({
      messages: this.state.messages
      //if uncommented, this causes error in map messages method
    });
  }

  toggleFlag(flag) {
    let toggle = flag ? false : true;
    return toggle;
  }

  handleSort() {
    //console.log("sort flag:", this.state.sortAsc);
    if (this.state.sortAsc) {
      this.state.messages.sort((a, b) => {
        return a.likes - b.likes;
      });
    } else {
      //console.log("sort des");
      this.state.messages.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    this.state.sortAsc = this.toggleFlag(this.state.sortAsc);
    console.log("sort flag:", this.state.sortAsc);

    this.setState({
      messages: this.state.messages,
      sortAsc: this.state.sortAsc
    });
  }

  render() {
    return (
      //note always have one enclosing tab containing all the code e.g. <div></div>
      <div>
        <Header title={"Pauline's"} date={Date.now()} />

        <div class="container">
          <div class="panel-group">
            <div class="panel panel-primary">
              <div class="panel-heading">Post a message</div>
              <div class="panel-body">
                <Post onPost={this.handlePost} />
                {/* <Post text={postMessage.text} onPost={this.handlePost} /> */}
              </div>
            </div>
          </div>

          <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading">Message Board</div>
              <button onClick={this.handleSort}>v Likes ^</button>
              <button onClick={this.handleSort}>v Date ^</button>

              <div class="panel-body">
                <ul class="message-board">
                  {this.state.messages.map(message => {
                    return (
                      <Message
                        text={message.text}
                        likes={message.likes}
                        id={message.id}
                        onLike={this.handleLike}
                        onDislike={this.handleDislike}
                        onDelete={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
