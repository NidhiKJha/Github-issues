import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };
    }

    onNext() {
        this.setState((state) => {
            let newPage = state.page + 1;
            this.props.setPage(newPage);
            return {
                page: newPage
            };
        });
    }

    onPrev() {
        this.setState((state) => {
            let newPage = Math.max(1, state.page - 1);
            this.props.setPage(newPage);
            return {
                page: newPage
            };
        });
    }

    render() {
        return (
            <div className="pagination">
                <button id="pagination_button" onClick={() => this.onPrev()}>
                    Previous
                </button>
                <button id="pagination_button" onClick={() => this.onNext()}>
                    Next
                </button>
            </div>
        );
    }
}

export default Pagination;
