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
              <main>
    <body>
              <div class="header-img">
                 <h1>The United App </h1>
                  <div class="menu">
                    </div>
                  </div>
                  </body>
                  <img src={Logo}   width="150" height="125" align="right" alt='website logo' />
                  </main>
              <br></br>
              <Switch>
                 <Route path="/" exact component={ListPlayersComponent} />
                 <Route path="/team" exact component={ListPlayersComponent} />
                 <Route path="/team/:id" component={PlayerComponent} />
              </Switch>

            </>
            <footer align="right"> copyright agDevtools 2020 </footer>
        </Router>
        )
    }
}

export default TeamApp
