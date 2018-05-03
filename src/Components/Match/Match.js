import React from 'react';

import PUBG from '../PUBG/PUBG';

class Match extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            kills: '',
            assists: '',
            damageDealt: '',
            headshotKills: '',
            winPlace: ''
        };

        this.searchMatch = this.searchMatch.bind(this);
    }   

    // TODO: Pass in username here as well
    searchMatch() {
        PUBG.getMatchIdStats(this.props.match.id).then(matchResults => {
            this.setState({
                kills: matchResults.attributes.stats.kills,
                assists: matchResults.attributes.stats.assists,
                damageDealt: matchResults.attributes.stats.damageDealt,
                headshotKills: matchResults.attributes.stats.headshotKills,
                winPlace: matchResults.attributes.stats.winPlace,
            })
        })
    }

    // TODO: Abstract this into MatchInformation component
    // TODO: Add logic for rendering fields better (should be able to get this logic from jamming for + and -)
    render() {
        return(
            <div className="Match" key={this.props.match.id}>
                <div className="Match-information">
                    <h3>{this.props.match.id}</h3>
                    <a onClick={this.searchMatch}>View Match Results</a>

                    <p>MORE META DATA SHOULD GO HERE.</p>

                    <p>Kills: {this.state.kills}</p>
                    <p>Assists: {this.state.assists}</p>
                    <p>damageDealt: {this.state.damageDealt}</p>
                    <p>headshotKills: {this.state.headshotKills}</p>
                    <p>winPlace: {this.state.winPlace}</p>
                    

                </div>
            </div>
        );
    }
}

export default Match;