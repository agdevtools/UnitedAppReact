import React, { Component } from 'react';
import ListPlayersComponent from './ListPlayersComponent';
import PlayerComponent from './PlayerComponent';
import Logo from './logo2.png';
import {
  Link
} from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
              <div class="header-img">
                 <h2a>The United App <Link to="/team"> <h2b>  Click to Enter </h2b> </Link> </h2a>
                  </div>
        )
    }
}

export default Homepage
