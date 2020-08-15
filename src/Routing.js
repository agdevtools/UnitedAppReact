import React, {Component} from 'react';
import Contact from './component/contact';
import Homepage from "./component/HomePage";
import PlayerComponent from './component/PlayerComponent';
import ListPlayersComponent from './component/ListPlayersComponent';
import TeamApp from './component/TeamApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Routing extends Component {
      render() {
                  return (
  <Router>
    <>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/teamapp" exact component={TeamApp} />
            <Route path="/team" exact component={ListPlayersComponent} />
            <Route path="/contact" component={Contact} />
            <Route path="/team/:id" component={PlayerComponent} />
         </Switch>
    </>
  </Router>
)
}
}

export default Routing

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();