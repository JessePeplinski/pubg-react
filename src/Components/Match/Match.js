import React from 'react';

import PUBG from '../PUBG/PUBG';

class Match extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            matchResults: ''
        };

        this.searchMatch = this.searchMatch.bind(this);
    }   

    // TODO: Pass in username here as well
    searchMatch() {
        PUBG.getMatchIdStats(this.props.match.id).then(matchResults => {
            this.setState({
                matchResults: matchResults
            })
        })
    }

    render() {
        return(
            <div className="Match" key={this.props.match.id}>
                <div className="Match-information">
                    <h3>{this.props.match.id}</h3>
                    <a onClick={this.searchMatch}>View Match Results</a>
                    <p>Kills: {this.state.matchResults}</p>
                </div>
            </div>
        );
    }
}

export default Match;