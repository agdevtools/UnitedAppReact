import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import HeaderText from './HeaderText';
import FormTable from './FormTable';

  function MatchDetails(id, utcDate, status, matchday, homeTeam, awayTeam) {
      this.id = id;
      this.utcDate = utcDate;
      this.status = status;
      this.matchday = matchday;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
  }

class MatchDate extends Component {

    constructor(props) {
            super(props)
            this.state = {
                nextMatch: [],
                matchDetails : Object
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
                    console.log("******* RESPONSE IS ********" , response.data);
                     this.setState({matchDetails: response.data.fixtureDetails})
                     console.log("*****  Object is *****", this.state.matchDetails)
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
            <h4 style={{paddingTop :"1rem" ,paddingLeft :"9.5rem"}}> Matchday {this.state.matchDetails.matchday}  {this.state.matchDetails.utcDate} </h4>
         </div>
  )
}
}
export default MatchDate