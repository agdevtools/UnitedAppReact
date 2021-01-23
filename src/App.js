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
        <Routing style={{paddingBottom :"9rem" }} />
                    <div>
                    <p><br></br></p>

                    <p><br></br></p>
                     <p><br></br></p>
                    </div>
        <MyFooter  style={{color :"white" }} />
      </div>
    )
  }
}
export default App