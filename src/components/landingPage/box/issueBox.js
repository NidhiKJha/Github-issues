import React, { Component } from "react";
import axios from "axios";

class Box extends Component {
  state = {
    lists: [],
    isLoading: true,
    errors: null,
  };

  // Now we're going to make a request for data using axios
  getLists() {
    axios
      //   // This is where the data is hosted
      .get("https://api.github.com/repos/facebook/react/issues?page=1")
      //   // Once we get a response and store data, let's change the loading state
      .then((response) => {
        console.log({ response });
        this.setState({
          lists: response.data,
          isLoading: false,
        });
      })
      //   // If we catch any errors connecting, let's update accordingly
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getLists();
  }

  // Putting that data to use
  render() {
    const { isLoading, lists } = this.state;
    return (
      <div className="Item">
        <div>
          {!isLoading ? (
            lists.map((list, index) => {
              const { title, assignee, created_at, number } = list;
              return (
                <div className="Item_Card " key={index}>
                  <p className="Item">
                    <span className="Item_Value">{title}</span>
                  </p>
                  <p className="Item">
                    <span className="Item_Value">{assignee}</span>
                  </p>
                  <p className="Item">
                    <span className="Item_Value">{created_at}</span>
                  </p>
                  <p className="Item">
                    <span className="Item_Value">{number}</span>
                  </p>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

export default Box;
