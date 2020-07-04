import React, { Component } from 'react';
import axios from 'axios';
import Comment from './comment';
import IssueBody from './body';
import "./issue.css" ;

class IssuePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            issue_data: ''
        };
    }

    getIssues(number) {
        axios
            .get(`https://api.github.com/repos/facebook/react/issues/${number}`)
            //   // Once we get a response and store data, let's change the loading state
            .then((response) => {
                console.log({ response });
                this.setState({
                    issue_data: response.data,
                    isLoading: false
                });
            })
            //   // If we catch any errors connecting, let's update accordingly
            .catch((error) => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
        this.getIssues(this.props.match.params.number);
    }

    // Putting that data to use
    render() {
        return (
            <div className="">
                <div>
                    <IssueBody issue_data={this.state.issue_data} />
                    <Comment number={this.props.match.params.number} />
                </div>
            </div>
        );
    }
}

export default IssuePage;