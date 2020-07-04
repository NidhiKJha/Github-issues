import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./issue.css"

class IssueBody extends Component {
  // constructor(props) {
  //     super(props);
  // }

  // Putting that data to use
  render() {
    const { issue_data } = this.props;
    return (
      <div className="issue_page">
        <div id="issue_title">
          {issue_data.title}
        </div>
        <div className="row">
        <div id="issue_body">
          <ReactMarkdown source={issue_data.body} />
        </div>
        </div>
      </div>
    );
  }
}

export default IssueBody;
