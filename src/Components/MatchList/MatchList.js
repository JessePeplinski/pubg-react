import React from 'react';

import Match from '../Match/Match';

class MatchList extends React.Component {
    render() {
        return (
            <div className="MatchList">
                {this.props.matches.map(match => {
                    return <Match key={match.id} match={match} matches={this.props.matches} />})
                }
            </div>
        );
    }
}

export default MatchList;