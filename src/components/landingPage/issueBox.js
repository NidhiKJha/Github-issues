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
  // Let's our app know we're ready to render the data
  componentDidUpdate(previousProps) {
    if (previousProps.user_repo !== this.props.user_repo) {
      this.getLists(this.props.user_repo);
    }
  }

  // Putting that data to use
  // Now we're going to make a request for data using axios
  getLists(user_repo) {
    console.log("object");
    axios
      // This is where the data is hosted
      .get(`https://api.github.com/repos/${user_repo}/issues?page=1`)
      // .get(`https://www.google.com/`)
      // Once we get a response and store data, let's change the loading state
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
  /////////////////////////////////////////
  // Putting that data to use
  render() {
    const { isLoading, issue_list, error } = this.state;
    const { user_repo } = this.props;

    if (!user_repo) {
      return <div>Please enter an valid repository identifier</div>;
    }
    if (error) {
      return <div>An error occurred while fetching issue.</div>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!issue_list.length) {
      return <div>No issues to display</div>;
    }
    return (
      <div className="Item">
        <div className="header">
          <span className="row">
            <span className="col-xs-3">Issue </span>
            <span className="col-xs-9">title</span>
            <span className="col-xs-2">Reporter</span>
            <span className="col-xs-2">Comments</span>
          </span>
        </div>

        {issue_list.map((list, index) => {
          const { title, assignee, created_at, number } = list;
          return (
            <span className="Item" key={index.toString() + number.toString()}>
                 <Link to={"/issuepage/" + number}>
                   <span className="row">
                    <span className="col-xs-3">{number}</span>
                    <span className="col-xs-9">{title}</span>
                    <span className="col-xs-3">{assignee}</span>
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
