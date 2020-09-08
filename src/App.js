import React from 'react'
import '.././node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
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