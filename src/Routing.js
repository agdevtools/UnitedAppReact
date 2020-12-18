import React, {Component} from 'react';
import Contact from './component/contact';
import Homepage from "./component/HomePage";
import PlayerComponent from './component/PlayerComponent';
import PlayerList from './component/PlayerList';
import TeamComponent from './component/TeamComponent';
import TableComponent from './component/LeagueTableComponent';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class Routing extends Component {
      render() {
                  return (
  <Router>
    <>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/team" exact component={TeamComponent} />
            <Route path="/contact" component={Contact} />
            <Route path="/playerlist" component={PlayerList} />
            <Route path="/player/:id" component={PlayerComponent} />
            <Route path="/tables" component={TableComponent} />
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