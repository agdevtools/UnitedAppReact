import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamApp from './component/TeamApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TeamApp />
      </div>
    );
  }
}

export default App;
