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
                 <h1>The United App <Link to="/team"> <h4>  Click to Enter </h4> </Link> </h1>
                  </div>
        )
    }
}

export default Homepage
