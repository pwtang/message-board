import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cts = this.props.date;
    let cdate = new Date(cts).toString();

    return (
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header ">
            <h1>{this.props.title} Message Board</h1>
            {/* <h2>{this.props.date}</h2> */}
            {cdate}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
