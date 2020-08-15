import React, { Component } from 'react';
import ListPlayersComponent from './ListPlayersComponent';
import PlayerComponent from './PlayerComponent';
import Logo from './logo2.png';
import Routing from '.././Routing.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class TeamApp extends Component {
    render() {
        return (
              <main>
                 <body>

                <h1>The United App   <img src={Logo}   width="150" height="125" align="right" alt='website logo' /> </h1>
                 <div>
                 <ListPlayersComponent/>
                  </div>
                  </body>

                    <footer align="right"> copyright agDevtools 2020 </footer>
                   </main>

        )
    }
}

export default TeamApp
