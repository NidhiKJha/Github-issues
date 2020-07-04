import React, { Component } from "react";
import NavBar from "./nav";
import Footer from "./footer";
import Box from "./issueBox";
import Search from "./search";
import "./landingPage.css";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      user_repo: "",
    };
  }

  setSearchQuery(query) {
    this.setState({
      user_repo: query,
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Search setSearchQuery={(query) => this.setSearchQuery(query)} />
        <div>
          <Box user_repo={this.state.user_repo} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default LandingPage;
