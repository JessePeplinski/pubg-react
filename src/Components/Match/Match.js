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
            winPlace: '',
            showing: false
        };

        this.searchMatch = this.searchMatch.bind(this);
    }

    // TODO: Pass in username here as well
    // TODO: Make this not render twice on click
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

    getMatchMetaData() {
        PUBG.getHighLevelMatchStats(this.props.match.id).then(matchResults => {
            this.setState({
                createdAt: matchResults.createdAt,
                duration: matchResults.duration,
                gameMode: matchResults.gameMode,
                mapName: matchResults.mapName
            })
        })
    }

    // "data": {
    //     "type": "string",
    //     "id": "string",
    //     "attributes": {
    //       "createdAt": "string",
    //       "duration": 0,
    //       "gameMode": "duo",
    //       "mapName": "Desert_Main",
    //       "patchVersion": "string",
    //       "shardId": "string",
    //       "stats": {},
    //       "tags": {},
    //       "titleId": "string"
    //     },

    // TODO: Abstract this into MatchInformation component
    // TODO: Add logic for rendering fields better (should be able to get this logic from jamming for + and -)
    render() {
        const { showing } = this.state;
        return (
            <div className="Match" key={this.props.match.id}>
                <div className="Match-information">
                    <h3>Match ID: {this.props.match.id}</h3>

                    {/* Only make the request when the content is hidden */}
                    <button onClick={() => {this.setState({ showing: !showing }); {showing ? null : this.searchMatch(); this.getMatchMetaData(); }}}>
                        {showing ? 'Hide' : 'Show'} Match Results
                    </button>
                    
                    {/* Toggle game stats onClick */}
                    { showing 
                        ? 
                        <div className="gamestats">

                            <p>Created at: {this.state.createdAt}</p>
                            <p>Duration: {this.state.duration}</p>
                            <p>Game mode: {this.state.gameMode}</p>
                            <p>Map name: {this.state.mapName}</p>

                            <p>Kills: {this.state.kills}</p>
                            <p>Assists: {this.state.assists}</p>
                            <p>damageDealt: {this.state.damageDealt}</p>
                            <p>headshotKills: {this.state.headshotKills}</p>
                            <p>winPlace: {this.state.winPlace}</p>
                        </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Match;