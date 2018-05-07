const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmZjgzMTVjMC0xOGNkLTAxMzYtYjdiNi0wNjk4NDNiNWIwOTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNjkyMTc3LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctY2hhdGJvdCIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.MQGGBf_9IdH14VM9SLb9mD4ELDnKHU3iUM57CmooKKk';

// var endpointMatchID = `https://api.playbattlegrounds.com/shards/pc-na/players?filter[playerNames]=${username}`;
// let matchID = `https://api.playbattlegrounds.com/shards/pc-na/matches/${matchID}`

const options = {
    method: 'GET',
    headers: {
        'User-Agent': 'request',
        'Authorization': 'Bearer ' + apiKey,
        'Accept': 'application/vnd.api+json',
        'Accept-Encoding': 'gzip'
    },
}

const PUBG = {

    set username(username) {
        this.username = username;
    },

    get username() {
        return this.username;
    },

    getMatchIds(username) {
        return fetch(`https://api.playbattlegrounds.com/shards/pc-na/players?filter[playerNames]=${username}`, options)
        .then(response => {
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers.raw());
            // console.log(response.headers.get('content-type'));

            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error getting request');
            }
        })
        .then(jsonResponse => {

            console.log(jsonResponse);

            if (!jsonResponse.data) {
                return [];
            }
            return jsonResponse.data[0].relationships.matches.data.map(match => ({
                id: match.id
            }));
        })
        .catch(err => console.log('error occured: ' + err));
    },

    // TODO: Finish this function
    getMatchIdStats(matchID, username) {
        return fetch(`https://api.playbattlegrounds.com/shards/pc-na/matches/${matchID}`, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error getting request');
            }
        })
        .then(jsonResponse => {
            if (!jsonResponse.data) {
                return '';
            }

            // get an array with json of a single match status in the included array
            const results = jsonResponse.included.filter(match => match.type === 'participant' && match.attributes.stats.name === this.username); 

            console.log(results);
            
            // TODO: Return the right thing here to spit out all the desired fields. I can also set the state?
            return results[0];

        })
        .catch(err => console.log('error occured: ' + err));
    },

    getHighLevelMatchStats(matchID, username) {
        return fetch(`https://api.playbattlegrounds.com/shards/pc-na/matches/${matchID}`, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log('error getting request');
            }
        })
        .then(jsonResponse => {
            if (!jsonResponse.data) {
                return '';
            }

            // get an array with json of a single match status in the included array
            const results = jsonResponse.data.attributes;

            console.log(results);
            
            // TODO: Return the right thing here to spit out all the desired fields. I can also set the state?
            return results;

        })
        .catch(err => console.log('error occured: ' + err));
    },

    // TODO - Throwing an error for no duplicate keys
    username: ''
};

module.exports = PUBG;