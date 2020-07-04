import React, { Component } from 'react';
import Box from './issueBox';
import Search from './search';
import './landingPage.css';
import Pagination from './pagination';

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            user_repo: '',
            page: 1
        };
    }

    setPage(page) {
        this.setState({
            page: page
        });
    }

    setSearchQuery(query) {
        this.setState({
            user_repo: query
        });
    }

    render() {
        return (
            <div>
                <div id="form_class" style={{ textAlign: 'center', alignItems: 'center' }}>
                    {' '}
                    <Search setSearchQuery={(query) => this.setSearchQuery(query)} />
                </div>
                <div>
                    <Box page={this.state.page} user_repo={this.state.user_repo} />
                </div>
                <Pagination setPage={(page) => this.setPage(page)} />
            </div>
        );
    }
}

export default LandingPage;
