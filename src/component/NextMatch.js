import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';

class NextMatch extends Component {

    constructor(props) {
            super(props)
            this.state = {
                nextMatch: ""
                }
        this.getNextMatch = this.getNextMatch.bind(this)
    }

    componentDidMount() {
        this.getNextMatch();
    }

    getNextMatch() {
        TeamDataService.getNextMatch()
            .then(
                response => {
                    console.log(response);
                    this.setState({ nextMatch: response.data })
                }

            , (error) => {
              console.log("there was an error getting the next match");
              this.setState({ nextMatch : "No Fixtures Found"})
            }
            )
    }


  render() {

  return (
                    <div>
                        <h4>{this.state.nextMatch}</h4>
                     </div>
  )
}
}
export default NextMatch