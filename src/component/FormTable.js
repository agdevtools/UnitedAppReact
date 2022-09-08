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

    function MyFixtureDetails(utcDate, homeTeamId,awayTeamId, homeForm, awayForm, homeTeamName, awayTeamName) {
        this.utcDate = utcDate;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.homeForm = homeForm;
        this.awayForm = awayForm;
        this.homeTeamName = homeTeamName;
        this.awayTeamName = awayTeamName;
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
                MyFixtureDetails : new MyFixtureDetails(),
                formObject : Object,
                responseObject : Object,
                homeTeamId : "",
                awayTeamId : ""
                }
            this.getNextMatch = this.getNextMatch.bind(this)
            this.getForm = this.getForm.bind(this)
             this.myForm = this.myForm.bind(this)
            }

            componentDidMount() {
                this.getNextMatch();
                this.getForm();
            }

            getNextMatch() {
                TeamDataService.getNextMatch()
                    .then(
                        response => {
                            console.log("******* RESPONSE IS ********" , response.data);
                             this.setState({matchDetails: response.data.fixtureDetails})
                             this.setState({fixtureDetails: response.data.fixtureDetails})
                             this.setState({ responseObject: response.data })
                             console.log("******* RESPONSE OBJECT IS ********" , this.state.responseObject);
                             this.setState({homeTeamId: response.data.fixtureDetails.homeTeamId})
                             this.setState({awayTeamId: response.data.fixtureDetails.awayTeamId})
                        }

                    , (error) => {
                      console.log("there was an error getting the next match");
                      this.setState({ nextMatch : "No Fixtures Found"})
                    }
                    )
            }

                        getForm() {
                            TeamDataService.getForm()
                                .then(
                                    response => {
                                        console.log("******* FORM RESPONSE IS ********" , response.data);
                                         this.setState({formObject: response.data})
                                         console.log("******* FORM DETAILS IS ********" , this.state.formDetails);

                                    }

                                , (error) => {
                                  console.log("there was an error getting the form match");

                                }
                                )
                        }

                        myForm(myId) {
                          var index = 0;
                            console.log("INSIDE TH E FRACKING LOOP my id = ", myId)
                           for (index = 0; index < this.state.formObject.length; ++index) {
                                        console.log("INSIDE TH E FRACKING LOOP index = ", index)
                                          console.log("comparing = ", this.state.formObject[index].teamId)
                                         console.log("with  ", myId )
                                               if(this.state.formObject[index].teamId === myId) {
                                                   return this.state.formObject[index].form
                                               }
                                     }
                               return []
                        }


  render() {

      if (typeof(this.state.responseObject.fixtureDetails) !== 'undefined') {
      if (typeof(this.state.formObject) !== 'undefined' ) {

      var test = new MyFixtureDetails(
                    new Date(this.state.responseObject.fixtureDetails[0].utcDate).toLocaleDateString(),
                    this.state.responseObject.fixtureDetails[0].awayTeamId,
                    this.state.responseObject.fixtureDetails[0].homeTeamId,
                    this.myForm(this.state.responseObject.fixtureDetails[0].homeTeamId),
                    this.myForm(this.state.responseObject.fixtureDetails[0].awayTeamId),
                    this.state.responseObject.fixtureDetails[0].homeTeam,
                    this.state.responseObject.fixtureDetails[0].awayTeam,
                    )

       var utcDate =  new Date(this.state.responseObject.fixtureDetails[0].utcDate).toLocaleDateString();
       var awayTeamId =  this.state.responseObject.fixtureDetails[0].awayTeamId;
       var homeTeamId = this.state.responseObject.fixtureDetails[0].homeTeamId;
       var hform = this.myForm(this.state.responseObject.fixtureDetails[0].homeTeamId);
       var aform = this.myForm(this.state.responseObject.fixtureDetails[0].awayTeamId);
       var homeTeam = this.state.responseObject.fixtureDetails[0].homeTeam;
       var awayTeam = this.state.responseObject.fixtureDetails[0].awayTeam;

      var utcDate1 =  new Date(this.state.responseObject.fixtureDetails[1].utcDate).toLocaleDateString();
      var awayTeamId1 =  this.state.responseObject.fixtureDetails[1].awayTeamId;
      var homeTeamId1 = this.state.responseObject.fixtureDetails[1].homeTeamId;
      var hform1 = this.myForm(this.state.responseObject.fixtureDetails[1].homeTeamId);
      var aform1 = this.myForm(this.state.responseObject.fixtureDetails[1].awayTeamId);
      var homeTeam1 = this.state.responseObject.fixtureDetails[1].homeTeam;
      var awayTeam1 = this.state.responseObject.fixtureDetails[1].awayTeam;

     var utcDate2 =  new Date(this.state.responseObject.fixtureDetails[2].utcDate).toLocaleDateString();
     var awayTeamId2 =  this.state.responseObject.fixtureDetails[2].awayTeamId;
     var homeTeamId2 = this.state.responseObject.fixtureDetails[2].homeTeamId;
     var hform2 = this.myForm(this.state.responseObject.fixtureDetails[2].homeTeamId);
     var aform2 = this.myForm(this.state.responseObject.fixtureDetails[2].awayTeamId);
     var homeTeam2 = this.state.responseObject.fixtureDetails[2].homeTeam;
     var awayTeam2 = this.state.responseObject.fixtureDetails[2].awayTeam;

    var utcDate3 = new Date(this.state.responseObject.fixtureDetails[3].utcDate).toLocaleDateString();
    var awayTeamId3 =  this.state.responseObject.fixtureDetails[3].awayTeamId;
    var homeTeamId3 = this.state.responseObject.fixtureDetails[3].homeTeamId;
    var hform3 = this.myForm(this.state.responseObject.fixtureDetails[3].homeTeamId);
    var aform3= this.myForm(this.state.responseObject.fixtureDetails[3].awayTeamId);
    var homeTeam3 = this.state.responseObject.fixtureDetails[3].homeTeam;
    var awayTeam3 = this.state.responseObject.fixtureDetails[3].awayTeam;

//   var utcDate4 =  new Date(this.state.responseObject.fixtureDetails[4].utcDate).toLocaleDateString();
//   var awayTeamId4 =  this.state.responseObject.fixtureDetails[4].awayTeamId;
//   var homeTeamId4 = this.state.responseObject.fixtureDetails[4].homeTeamId;
//   var hform4 = this.myForm(this.state.responseObject.fixtureDetails[4].homeTeamId);
//   var aform4 = this.myForm(this.state.responseObject.fixtureDetails[4].awayTeamId);
//   var homeTeam4 = this.state.responseObject.fixtureDetails[4].homeTeam;
//   var awayTeam4 = this.state.responseObject.fixtureDetails[4].awayTeam;

    var currentUtcTime = new Date(); // This is in UTC

    // Converts the UTC time to a locale specific format, including adjusting for timezone.
    var currentDateTimeCentralTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'America/Chicago' }));

    console.log('currentUtcTime: ' + currentUtcTime.toLocaleDateString());
    console.log('currentUtcTime Hour: ' + currentUtcTime.getHours());
    console.log('currentUtcTime Minute: ' + currentUtcTime.getMinutes());
    console.log('currentDateTimeCentralTimeZone: ' +        currentDateTimeCentralTimeZone.toLocaleDateString());
    console.log('currentDateTimeCentralTimeZone Hour: ' + currentDateTimeCentralTimeZone.getHours());
    console.log('currentDateTimeCentralTimeZone Minute: ' + currentDateTimeCentralTimeZone.getMinutes());
       }
       }

  return (
  <div>
                    <div style={{paddingLeft :"0.5rem" }}>
                             <div> <h6> {utcDate} </h6> </div>
                            <FormForm  fixtureObject={test}
                                       utcDate={utcDate}
                                       homeTeamId={homeTeamId}
                                       awayTeamId={awayTeamId}
                                       hform={hform}
                                       aform={aform}
                                       homeTeam={homeTeam}
                                       awayTeam={awayTeam}
                                        />
                     </div>

                     <div style={{paddingLeft :"0.5rem" }}>
                      <div> <h6> {utcDate1} </h6> </div>
                             <FormForm  fixtureObject={test}
                                        homeTeamId={homeTeamId1}
                                        awayTeamId={awayTeamId1}
                                        hform={hform1}
                                        aform={aform1}
                                        homeTeam={homeTeam1}
                                        awayTeam={awayTeam1}
                                        />
                      </div>

                       <div style={{paddingLeft :"0.5rem" }}>
                        <div> <h6> {utcDate2} </h6> </div>
                               <FormForm  fixtureObject={test}
                                          homeTeamId={homeTeamId2}
                                          awayTeamId={awayTeamId2}
                                          hform={hform2}
                                          aform={aform2}
                                          homeTeam={homeTeam2}
                                          awayTeam={awayTeam2}
                                          />
                        </div>

                         <div style={{paddingLeft :"0.5rem" }}>
                          <div> <h6> {utcDate3} </h6> </div>
                                 <FormForm  fixtureObject={test}
                                            homeTeamId={homeTeamId3}
                                            awayTeamId={awayTeamId3}
                                            hform={hform3}
                                            aform={aform3}
                                            homeTeam={homeTeam3}
                                            awayTeam={awayTeam3}
                                            />
                          </div>

                           <div style={{paddingLeft :"0.5rem" }}>
                            <div> <h6> {utcDate3} </h6> </div>
                                   <FormForm  fixtureObject={test}
                                              homeTeamId={homeTeamId3}
                                              awayTeamId={awayTeamId3}
                                              hform={hform3}
                                              aform={aform3}
                                              homeTeam={homeTeam3}
                                              awayTeam={awayTeam3}
                                              />
                            </div>
                            <p><br></br></p>
                            <p><br></br></p>
                        </div>

  )
}
}
export default FormTable