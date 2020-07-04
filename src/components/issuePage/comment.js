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

    // Now we're going to make a request for data using axios
    getIssues(number) {
        axios
            // This is where the data is hosted
            .get(`https://api.github.com/repos/facebook/react/issues/${number}/comments`)
            // Once we get a response and store data, let's change the loading state
            .then((response) => {
                this.setState({
                    comments_list: response.data,
                    isLoading: false
                });
            })
            // If we catch any errors connecting, let's update accordingly
            .catch((error) => this.setState({ error, isLoading: false }));
    }
    // Let's our app know we're ready to render the data
    componentDidMount() {
        this.getIssues(this.props.number);
    }

    // Putting that data to use
    render() {
        const { comments_list } = this.state;

        if (!comments_list.length) {
            return <div>No comments to display</div>;
        }

        return (
            <div className="issue_comments">
                {comments_list.map((comment) => {
                    return (
                        <div className= "comment_one" key={comment.id}>
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