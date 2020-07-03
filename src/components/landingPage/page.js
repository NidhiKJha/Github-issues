import React, { Component } from "react";
import NavBar from "./nav";
import Footer from "./footer";
import Box from "./issueBox";
import "./landingPage.css" ;

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>Search</div>
        <div>
          {" "}Hi
          <Box />{" "}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default LandingPage;
