import React, { Component } from 'react';
import ListPlayersComponent from './ListPlayersComponent';

class TeamApp extends Component {
    render() {
        return (<>
              <h1>United Application</h1>
              <ListPlayersComponent/>
              </>
        )
    }
}

export default TeamApp
