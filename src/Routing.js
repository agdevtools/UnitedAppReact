import React, {Component} from 'react';
import Contact from './component/contact';
import Homepage from "./component/HomePage";
import PlayerComponent from './component/PlayerComponent';
import TeamComponent from './component/TeamComponent';
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
            <Route path="/player/:id" component={PlayerComponent} />
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