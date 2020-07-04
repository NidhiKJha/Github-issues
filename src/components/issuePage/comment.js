import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments_list: [],
            data: null
        };
    }

    getIssues(number) {
        axios

            .get(`https://api.github.com/repos/facebook/react/issues/${number}/comments`)

            .then((response) => {
                this.setState({
                    comments_list: response.data,
                    isLoading: false
                });
            })

            .catch((error) => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getIssues(this.props.number);
    }

    render() {
        const { comments_list } = this.state;

        if (!comments_list.length) {
            return <div>No comments to display</div>;
        }

        return (
            <div className="issue_comments">
                {comments_list.map((comment) => {
                    return (
                        <div className="comment_one" key={comment.id}>
                            <div>Comment by {comment.author_association}</div>
                            <ReactMarkdown id="issue_comment_body" source={comment.body} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Comment;
