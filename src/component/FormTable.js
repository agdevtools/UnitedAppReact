import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import NextMatch from './NextMatch';


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
                       <table class="result" border="1">
                         <tr>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.hcolor[0]}}>{this.state.hform[0]} </button>
                             </div>
                           </td>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.hcolor[1]}} > {this.state.hform[1]}</button>
                             </div>
                           </td>
                               <td>
                                 <div>
                                   <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.hcolor[2]}} >{this.state.hform[2]}</button>
                                 </div>
                               </td>
                              <td>
                                <div>
                                  <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.hcolor[3]}} >{this.state.hform[3]}</button>
                                </div>
                              </td>
                             <td>
                               <div>
                                 <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.hcolor[4]}} >{this.state.hform[4]}</button>
                               </div>
                             </td>
                               <td>
                                 <NextMatch/>
                              </td>
                             <td>
                                 <div>
                                    <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[0]}} >{this.state.aform[0]}</button>
                                </div>
                             </td>
                           <td>
                              <div>
                                 <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[1]}} >{this.state.aform[1]}</button>
                             </div>
                             </td>
                          <td>
                               <div>
                                  <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[2]}} >{this.state.aform[2]}</button>
                              </div>
                              </td>
                           <td>
                                <div>
                                   <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[3]}} >{this.state.aform[3]}</button>
                               </div>
                               </td>
                           <td>
                           <div>
                              <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[4]}} >{this.state.aform[4]}</button>
                          </div>
                          </td>
                         </tr>
                       </table>
                    </div>

  )
}
}
export default FormTable