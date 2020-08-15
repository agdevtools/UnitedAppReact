import React from 'react'
import './App.css';
import './index.css';
import Routing from './Routing';


class App extends React.Component {
  render() {
    return (
      <div>
        <Routing/>
      </div>
    )
  }
}
export default App


//<ul>
//                <li>
//                  <Link to="/">Home</Link>
//                </li>
//                <li>
//                  <Link to="/users">Users</Link>
//                </li>
//                <li>
//                  <Link to="/contact">Contact</Link>
//                </li>
//                <li>
//                    <Link to="/homepage">Homepage</Link>
//                </li>
//              </ul>