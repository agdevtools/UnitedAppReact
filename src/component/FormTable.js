import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import FormForm from './FormForm';


  function MatchDetails(id, utcDate, status, matchday, homeTeam, awayTeam, homeTeamId, awayTeamId) {
      this.id = id;
      this.utcDate = utcDate;
      this.status = status;
      this.matchday = matchday;
      this.homeTeam = homeTeam;
      this.awayTeam = awayTeam;
      this.homeTeamId = homeTeamId;
      this.awayTeamId = awayTeamId;
  }

class FormTable extends Component {

    constructor(props) {
            super(props)
            this.state = {
                hform: [],
                aform: [],
                hcolor: [],
                acolor: [],
                matchDetails : Object,
                fixtureDetails : [],
                homeTeamId : "",
                awayTeamId : ""
                }
            this.getNextMatch = this.getNextMatch.bind(this)
            this.getHomeForm = this.getHomeForm.bind(this)
            this.getAwayForm = this.getAwayForm.bind(this)
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
                             this.setState({fixtureDetails: response.data.fixtureDetails})
                             console.log("******* FIXTURE DETAILS IS ********" , this.state.fixtureDetails);
                             this.setState({homeTeamId: response.data.fixtureDetails.homeTeamId})
                             this.setState({awayTeamId: response.data.fixtureDetails.awayTeamId})

                             console.log("*****  Object is *****", this.state.matchDetails)
                             console.log("*****  home id is *****", this.state.homeTeamId)
                             console.log("*****  away id is *****", this.state.awayTeamId)
                             this.getHomeForm(this.state.homeTeamId)
                             this.getAwayForm(this.state.awayTeamId)
                        }

                    , (error) => {
                      console.log("there was an error getting the next match");
                      this.setState({ nextMatch : "No Fixtures Found"})
                    }
                    )
            }

            getHomeForm(homeTeamId)
            {
              TeamDataService.getHomeForm(homeTeamId)
                                            .then(
                                                response => {
                                                    console.log("******* HOME FORM RESPONSE IS ********" , response.data);
                                                    this.setState({ hform: response.data })
                                                }

                                            , (error) => {
                                              console.log("there was an error defaulting to default player list");
                                              this.setState({ hform : ["L","L","L","L","L"]})
                                            }
                                            )
            }

            getAwayForm(awayTeamId) {
                 TeamDataService.getAwayForm(awayTeamId)
                            .then(
                                response => {
                                    console.log("******* AWAY FORM RESPONSE IS ********" , response.data);
                                    this.setState({ aform: response.data })
                                }

                            , (error) => {
                              console.log("there was an error defaulting to default player list");
                              this.setState({ aform : ["L","L","L","L","L"]})
                            }
                            )
            }


  render() {

                var index;
                for (index = 0; index < this.state.hform.length; ++index) {
                    if(this.state.hform[index]==="W") {
                         this.state.hcolor.push("green")
                    }
                    else if(this.state.hform[index]==="L") {
                        this.state.hcolor.push("red")
                    }
                    else {
                        this.state.hcolor.push("orange")
                    }
                }

                index = 0;
                for (index = 0; index < this.state.aform.length; ++index) {
                    if(this.state.aform[index]==="W") {
                         this.state.acolor.push("green")
                    }
                    else if(this.state.aform[index]==="L") {
                        this.state.acolor.push("red")
                    }
                    else {
                        this.state.acolor.push("orange")
                    }
                }
  return (
                    <div style={{paddingLeft :"9rem" }}>
                            <FormForm hform={this.state.hform} hcolor={this.state.acolor[0]} aform={this.state.aform[0]} acolor={this.state.acolor[0]} fixtureDetails={this.state.fixtureDetails[0]}  />
                            <FormForm hform={this.state.hform} hcolor={this.state.acolor[0]} aform={this.state.aform[0]} acolor={this.state.acolor[0]} fixtureDetails={this.state.fixtureDetails[1]}  />
                            <FormForm hform={this.state.hform} hcolor={this.state.acolor[0]} aform={this.state.aform[0]} acolor={this.state.acolor[0]} fixtureDetails={this.state.fixtureDetails[2]}  />
                            <FormForm hform={this.state.hform} hcolor={this.state.acolor[0]} aform={this.state.aform[0]} acolor={this.state.acolor[0]} fixtureDetails={this.state.fixtureDetails[3]}  />
                            <FormForm hform={this.state.hform} hcolor={this.state.acolor[0]} aform={this.state.aform[0]} acolor={this.state.acolor[0]} fixtureDetails={this.state.fixtureDetails[4]}  />
                    </div>

  )
}
}
export default FormTable