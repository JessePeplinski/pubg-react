import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import PUBG from '../PUBG/PUBG';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {

    constructor(props) {
        super(props);

        // TODO: The matchID should be an array of stuff
        this.state = {
            playerName: '',
            matchIDs: [],
            searchResults: []
        }
        this.search = this.search.bind(this);
    }

    search(username) {
        PUBG.getUserName(username).then(searchResults => {
            this.setState({
                searchResults: searchResults
            })
        })
    }

    // TODO: Make a function in PUBG to search by matchID, pass in an array of matchIDs to it.
    // search(matchID) {
    //     PUBG.getMatchIdStats(matchID).then(json => {

    //     })
    // }

    render() {
        return (
            <div className="App">
                <SearchBar onSearch={this.search} />
                <SearchResults searchResults={this.state.searchResults} />
                <p>{this.state.playerName}</p>
                <p>{this.state.matchIDs}</p>
            </div>
        );
    }
}

export default App;
