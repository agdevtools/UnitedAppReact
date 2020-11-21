import React from 'react'
import './App.css';
import Routing from './Routing';
import getEnv from './environment';


class App extends React.Component {
  render() {
    console.log("Environment is : ", getEnv());
    return (
      <div>
        <Routing/>
      </div>
    )
  }
}
export default App