import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

class Body extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          data: null,
          Number: this.props.match.params.number
        }
  };

  // Now we're going to make a request for data using axios
  getIssues() {
    axios
      //   // This is where the data is hosted
      .get("https://api.github.com/repos/facebook/react/issues/" + this.state.Number)
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
    this.getIssues();
  }

  // Putting that data to use
  render() {
   
    return (
      <div className="Item">
        <div>
         Hi
        </div>
      </div>
    );
  }
}

export default Body;
