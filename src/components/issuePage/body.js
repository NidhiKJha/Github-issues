import React, { Component } from "react";
import axios from "axios";

class IssueBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issue_list: [],
      isLoading: true,
      data: null,
      Numb: this.props.Number,
    };
  }

  // Now we're going to make a request for data using axios
  getIssues() {
    axios
      //   // This is where the data is hosted
      .get(
        "https://api.github.com/repos/facebook/react/issues/" +
          this.state.Numb 
      )
      //   // Once we get a response and store data, let's change the loading state
      .then((response) => {
        console.log({ response });
        this.setState({
          issue_list: response.data,
          isLoading: false,
        });
      })
      //   // If we catch any errors connecting, let's update accordingly
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getIssues();
  }

  // Putting that data to use
  render() {
    const { issue_list } = this.state;
    return (
      <div className="Item">
        {issue_list.map((list, index) => {
          const { body } = list;
          return (
            <span className="Item" key={index.toString()}>
              <span className="row">
                <span className="col-xs-3">{body}</span>
              </span>
            </span>
          );
        })}
      </div>
    );
  }
}

export default IssueBody;
