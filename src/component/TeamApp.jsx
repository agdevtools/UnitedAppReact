import React, { Component } from 'react';
import ListPlayersComponent from './ListPlayersComponent';
import PlayerComponent from './PlayerComponent';
import Logo from './logo2.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class TeamApp extends Component {
    render() {
        return (
        <Router>
            <>
              <br></br>
              <h1>The United App    <img src={Logo}   width="150" height="125" align="middle" alt='website logo' /></h1>
              <br></br>
              <Switch>
                 <Route path="/" exact component={ListPlayersComponent} />
                 <Route path="/team" exact component={ListPlayersComponent} />
                 <Route path="/team/:id" component={PlayerComponent} />
              </Switch>

            </>
        </Router>
        )
    }
}

export default TeamApp
