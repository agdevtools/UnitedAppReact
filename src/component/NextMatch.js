import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import HeaderText from './HeaderText';

export default function NextMatch({homeTeam , awayTeam}) {

  return (
        <div>
            <h3 style={{paddingTop :"1rem" ,paddingLeft :"1.5rem"}}> {homeTeam}   vs    {awayTeam} </h3>
         </div>
  )

}