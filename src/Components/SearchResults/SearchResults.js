import React from 'react';

import MatchList from '../MatchList/MatchList';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <MatchList matches={this.props.searchResults} />
            </div>
        );
    }
}

export default SearchResults;