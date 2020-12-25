import React from 'react'
import './App.css';
import Routing from './Routing';
import getEnv from './environment';
import MyFooter from './component/MyFooter';


class App extends React.Component {
  render() {
    console.log("Environment is : ", getEnv());
    return (
      <div>
        <Routing/>
        <MyFooter/>
      </div>
    )
  }
}
export default App