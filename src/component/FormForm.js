import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import HeaderText from './HeaderText';
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

export default function FormForm({hform, hcolor, aform, acolor, fixtureDetails}) {

hform = (typeof hform !== 'undefined') ?  hform : []
hcolor = (typeof hcolor !== 'undefined') ?  hcolor : []
aform = (typeof aform !== 'undefined') ?  aform : []
acolor = (typeof acolor !== 'undefined') ?  acolor : []
fixtureDetails = (typeof fixtureDetails !== 'undefined') ?  fixtureDetails : []

  return (


<table class="result" border="1">
                         <tr>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : hcolor[0]}}>{hform[0]} </button>
                             </div>
                           </td>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : hcolor[1]}} > {hform[1]}</button>
                             </div>
                           </td>
                               <td>
                                 <div>
                                   <button className="btn-form btn-form-primary btn-form-details" style={{background : hcolor[2]}} >{hform[2]}</button>
                                 </div>
                               </td>
                              <td>
                                <div>
                                  <button className="btn-form btn-form-primary btn-form-details" style={{background : hcolor[3]}} >{hform[3]}</button>
                                </div>
                              </td>
                             <td>
                               <div>
                                 <button className="btn-form btn-form-primary btn-form-details" style={{background : hcolor[4]}} >{hform[4]}</button>
                               </div>
                             </td>
                               <td>
                                 <NextMatch fixtureDetails={fixtureDetails}/>
                              </td>
                             <td>
                                 <div>
                                    <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[0]}} >{aform[0]}</button>
                                </div>
                             </td>
                           <td>
                              <div>
                                 <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[1]}} >{aform[1]}</button>
                             </div>
                             </td>
                          <td>
                               <div>
                                  <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[2]}} >{aform[2]}</button>
                              </div>
                              </td>
                           <td>
                                <div>
                                   <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[3]}} >{aform[3]}</button>
                               </div>
                               </td>
                           <td>
                           <div>
                              <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[4]}} >{aform[4]}</button>
                          </div>
                          </td>
                         </tr>
                       </table>




  )

}