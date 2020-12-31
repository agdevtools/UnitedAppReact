import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import HeaderText from './HeaderText';

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

export default function NextMatch({fixtureDetails}) {

fixtureDetails = (typeof fixtureDetails !== 'undefined') ?  fixtureDetails : []

  return (
        <div>
            <h3 style={{paddingTop :"1rem" ,paddingLeft :"1.5rem"}}> {fixtureDetails.homeTeam}   vs    {fixtureDetails.awayTeam} </h3>
         </div>
  )

}