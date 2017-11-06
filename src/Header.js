import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cts = this.props.date;
    let cDate = new Date(cts).toString();
    //let cdate = new Date(cts).toLocaleString();

    return (
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header ">
            <h1>{this.props.title} Message Board</h1>
            {/* <h2>{this.props.date}</h2> */}
            {cDate}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
