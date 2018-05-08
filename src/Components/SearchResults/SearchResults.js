import React from 'react';

import MatchList from '../MatchList/MatchList';
import PUBG from '../PUBG/PUBG';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                {PUBG.username ? <h2>Results for {PUBG.username} on {PUBG.region}</h2> : null}
                <MatchList matches={this.props.searchResults} onMatchSearch={this.props.onMatchSearch}/>
            </div>
        );
    }
}

export default SearchResults;