import React, { Component } from 'react';
import axios from 'axios';
import Comment from './comment';
import IssueBody from './body';
import './issue.css';

class IssuePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            issue_data: ''
        };
    }

    getIssues(github_user, repo, number) {
        axios
            .get(`https://api.github.com/repos/${github_user}/${repo}/issues/${number}`)
            .then((response) => {
                console.log({ response });
                this.setState({
                    issue_data: response.data,
                    isLoading: false
                });
            })
            .catch((error) => this.setState({ error, isLoading: false }));
    }
    componentDidMount() {
        const { github_user, repo, number } = this.props.match.params;
        this.getIssues(github_user, repo, number);
    }
    render() {
        return (
            <div className="">
                <div>
                    <IssueBody issue_data={this.state.issue_data} />
                    <Comment
                        github_user={this.props.match.params.github_user}
                        repo={this.props.match.params.repo}
                        number={this.props.match.params.number}
                    />
                </div>
            </div>
        );
    }
}

export default IssuePage;
