import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Homepage extends Component {
    render() {
        return (
              <div class="header-img">
                 <h2a>The United App <Link to="/playerlist"> <h2b>  Click to Enter </h2b> </Link> </h2a>
                  </div>
        )
    }
}

export default Homepage
