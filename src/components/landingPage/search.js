import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        };
    }

    handleChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.setSearchQuery(e.target.user_repo.value);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        name="user_repo"
                        onChange={(e) => this.handleChange(e)}
                        placeholder="Enter the user/repo"
                        value={this.state.query}
                    />
                    <button type="submit">Search Issues</button>
                </form>
            </div>
        );
    }
}

export default Search;
