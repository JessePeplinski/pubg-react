import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import PUBG from '../PUBG/PUBG';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerName : '',
      matchID: ''
    }
    this.search = this.search.bind(this);
  }

  search(username) {
    PUBG.getUserName(username).then(json => {
      this.setState({
        playerName: json.data[0].attributes.name,
        matchID: json.data[0].relationships.matches.data[0].id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.search} />
        <p>{this.state.playerName}</p>
        <p>{this.state.matchID}</p>
      </div>
    );
  }
}

export default App;
