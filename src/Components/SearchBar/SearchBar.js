import React, { Component } from 'react';
import './SearchBar.css';

import PUBG from '../PUBG/PUBG';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            region: 'pc-na'
        };
        this.search = this.search.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search() {
        this.props.onSearch(this.state.username, this.state.region);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleRegionChange(event) {
        this.setState({
            region: event.target.value
        })
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter a username" onChange={this.handleUsernameChange} onKeyPress={this.handleKeyPress} />
                <select region={this.state.value} onChange={this.handleRegionChange}>
                    <option value="pc-na" selected>pc-na</option>
                    <option value="pc-krjp">pc-krjp</option>
                    <option value="pc-jp">pc-jp</option>
                    <option value="pc-eu">pc-eu</option>
                    <option value="pc-ru">pc-ru</option>
                    <option value="pc-oc">pc-oc</option>
                    <option value="pc-kakao">pc-kakao</option>
                    <option value="pc-sea">pc-sea</option>
                    <option value="pc-sa">pc-sa</option>
                    <option value="pc-as">pc-as</option>
                    <option value="xbox-as">xbox-as</option>
                    <option value="xbox-eu">xbox-eu</option>
                    <option value="xbox-na">xbox-na</option>
                    <option value="xbox-oc">xbox-oc</option>
                </select>
                <button onClick={this.search}>SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;
