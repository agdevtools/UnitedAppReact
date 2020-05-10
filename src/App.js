import React from 'react'
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
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
      </div>
    )
  }
}
export default App
