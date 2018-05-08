import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import PUBG from '../PUBG/PUBG';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerName: '',
            matchIDs: [],
            searchResults: []
        }
        this.search = this.search.bind(this);
    }

    search(username, region) {
        if(!PUBG.username) {
            PUBG.username = username;
        }

        if(!PUBG.region) {
            PUBG.region = region;
        }
        
        PUBG.getMatchIds(username, region).then(searchResults => {
            this.setState({
                searchResults: searchResults
            })
        })
    }

    render() {
        return (
            <div className="App">
                <h1>PUBG API Match Stats</h1>
                <SearchBar onSearch={this.search} />
                <SearchResults searchResults={this.state.searchResults} />
            </div>
        );
    }
}

export default App;
