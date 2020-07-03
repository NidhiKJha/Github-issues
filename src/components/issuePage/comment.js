import React, {Component} from "react";
import axios from "axios";

class Comment extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          data: null,
          Numb: this.props.Number
        }
  };

  // Now we're going to make a request for data using axios
  getIssues() {
    axios
      //   // This is where the data is hosted
      .get("https://api.github.com/repos/facebook/react/issues/" + this.state.Numb + "/comments")
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
        To
      </div>
    );
  }
}
 
export default Comment;
