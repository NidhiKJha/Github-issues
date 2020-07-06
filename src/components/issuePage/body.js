import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './issue.css';

class IssueBody extends Component {
    render() {
        const { issue_data } = this.props;
        // console.log(issue_data);
        return (
            <div className="issue_page">
                <div id="issue_title">{issue_data.title}</div>
                <div className="row">
                    <div id="issue_body">
                        <h1>Description</h1>
                        <ReactMarkdown source={issue_data.body} />
                    </div>
                    <div id="assignee_box">
                        <div id="assignee">
                            <span className="assignee_title">Assignee:</span> {issue_data.assignee}
                        </div>
                        <br></br>
                        <div id="assignee">
                            <span className="assignee_title">State:</span> {issue_data.state}
                        </div>
                    </div>
                </div>

                <div id="mobile_assignee_box">
                    <div id="assignee">
                        <span className="assignee_title">Assignee:</span> {issue_data.assignee}
                    </div>
                    <br></br>
                    <div id="assignee">
                        <span className="assignee_title">State:</span> {issue_data.state}
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueBody;
