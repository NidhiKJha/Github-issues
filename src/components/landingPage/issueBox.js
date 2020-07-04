import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Box extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      issue_list: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidUpdate(previousProps) {
    if (previousProps.user_repo !== this.props.user_repo) {
      this.getLists(this.props.user_repo);
    }
  }
  getLists(user_repo) {
    console.log("object");
    axios
      .get(`https://api.github.com/repos/${user_repo}/issues?page=1`)
      .then((response) => {
        console.log({ response });
        this.setState({
          issue_list: response.data,
          error: false,
          isLoading: false,
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch((error) => this.setState({ error: true, isLoading: false }));
  }
  render() {
    const { isLoading, issue_list, error } = this.state;
    const { user_repo } = this.props;

    if (!user_repo) {
      return (
        <div className="legend">Please enter a valid repository identifier</div>
      );
    }
    if (error) {
      return (
        <div className="legend">An error occurred while fetching issue.</div>
      );
    }
    if (isLoading) {
      return <div className="legend">Loading...</div>;
    }
    if (!issue_list.length) {
      return <div className="legend">No issues to display</div>;
    }
    return (
      <div className="Item">
        <div className="header">
          <span className="row">
            <span className="col-xs-1">Issue </span>
            <span className="col-xs-9">title</span>
            <span className="col-xs-2">Author</span>
            <span className="col-xs-3">Comment</span>
          </span>
        </div>

        {issue_list.map((list, index) => {
          const { title, comments, state, number, user } = list;
          return (
            <span className="Item" key={index.toString() + number.toString()}>
              <Link to={"/issuepage/" + number}>
                <span className="row">
                  <span className="col-xs-1">
                    {number}
                   {/* <span style={{ color: state = "open" ? 'red' : 'green' }}>{state}</span> */}
                  </span>
                  <span className="col-xs-9">{title}</span>
                  <span className="col-xs-2">{user.login}</span>
                  <span className="col-xs-3">
                    <i className="fa fa-comment-o" aria-hidden="true">
                      {" "}
                      {""}
                      {comments}
                    </i>
                  </span>
                </span>
              </Link>
            </span>
          );
        })}
      </div>
    );
  }
}

export default Box;
