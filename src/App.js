/**
* Main App
* Stores default Messages to be displayed
* Imports Header, Message, Post Components
*/
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
        { id: uuid.v4(), text: "First", likes: 0, dateTime: 1501278162700 },
        { id: uuid.v4(), text: "Second", likes: 1, dateTime: 1508858262700 },
        { id: uuid.v4(), text: "Third", likes: 2, dateTime: 1509878362700 },
        { id: uuid.v4(), text: "Fourth", likes: 3, dateTime: 1509968462700 },
        { id: uuid.v4(), text: "Fifth", likes: 4, dateTime: 1509978852700 },
        {
          id: uuid.v4(),
          text: "A longer string for testing. XYz A Bc",
          likes: 20,
          dateTime: 1509978862700
        },
        {
          id: uuid.v4(),
          text: `Lorem ipsum dolor sit amet, aperiri vivendum aliquando mel ut  `,
          likes: 8,
          dateTime: 1509978862700
        }
      ],
      sortLikesAsc: "true",
      sortDateAsc: "true",
      searchText: ""
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleLikesSort = this.handleLikesSort.bind(this);
    this.handleDateSort = this.handleDateSort.bind(this);
    this.toggleFlag = this.toggleFlag.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
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
    let now = require("date-now");

    const message = {
      id: uuid.v4(),
      text: text,
      likes: 0,
      dateTime: now()
    };
    console.log("new message: ", message);
    this.state.messages.push(message);
    this.setState({
      messages: this.state.messages
    });
  }

  // takes an input and returns true if false, else returns to true
  toggleFlag(flag) {
    let toggle = flag ? false : true;
    return toggle;
  }

  handleLikesSort() {
    //console.log("sort flag:", this.state.sortLikesAsc);
    if (this.state.sortLikesAsc) {
      this.state.messages.sort((a, b) => {
        return a.likes - b.likes;
      });
    } else {
      this.state.messages.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    //this.state.sortLikesAsc = this.toggleFlag(this.state.sortLikesAsc);
    //console.log("sort flag:", this.state.sortLikesAsc);

    this.setState({
      messages: this.state.messages,
      sortLikesAsc: this.toggleFlag(this.state.sortLikesAsc)
    });
  }

  //to do, combine date and like sort to one
  handleDateSort() {
    if (this.state.sortDateAsc) {
      this.state.messages.sort((a, b) => {
        return a.dateTime - b.dateTime;
      });
    } else {
      this.state.messages.sort((a, b) => {
        return b.dateTime - a.dateTime;
      });
    }
    //this.state.sortDateAsc = this.toggleFlag(this.state.sortDateAsc);

    this.setState({
      messages: this.state.messages,
      sortDateAsc: this.toggleFlag(this.state.sortDateAsc)
    });
  }

  handleSearchInputChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleClearSearch(event) {
    this.setState({
      searchText: ""
    });
    event.preventDefault();
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
              </div>
            </div>
          </div>

          <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading">Message Board</div>
              <button class="pull-right" onClick={this.handleLikesSort}>
                v Likes ^
              </button>
              <button class="pull-right" onClick={this.handleDateSort}>
                v Date ^
              </button>
              <form id="message-search-form" onSubmit={this.handleClearSearch}>
                <input
                  id="search"
                  type="text"
                  placeholder="Search Messages..."
                  value={this.state.searchText}
                  onChange={this.handleSearchInputChange}
                />
                <button id="clear">Clear</button>
              </form>

              <div class="panel-body">
                <ul class="message-board">
                  {this.state.messages
                    .filter(message =>
                      message.text
                        .toString()
                        .toLowerCase()
                        .includes(this.state.searchText)
                    )
                    .map(message => {
                      return (
                        <Message
                          text={message.text}
                          likes={message.likes}
                          id={message.id}
                          dateTime={message.dateTime}
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
