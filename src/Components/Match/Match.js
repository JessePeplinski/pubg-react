import React from 'react';

class Match extends React.Component {    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Match" key={this.props.match.id}>
                <div className="Match-information">
                    <h3>{this.props.match.id}</h3>
                </div>
            </div>
        );
    }
}

export default Match;