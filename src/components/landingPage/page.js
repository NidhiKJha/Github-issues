import React, { Component } from "react";
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
        <div
          id="form_class"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <Search setSearchQuery={(query) => this.setSearchQuery(query)} />
        </div>
        <div>
          <Box user_repo={this.state.user_repo} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
