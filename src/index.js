import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './component/user';
import Contact from './component/contact';
import Homepage from './component/HomePage';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/homepage">Homepage</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/homepage" component={Homepage} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
