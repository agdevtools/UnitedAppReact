import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import HeaderText from './HeaderText';
import NextMatch from './NextMatch';

export default function FormForm({fixtureObject, homeTeamId, awayTeamId, hform, aform, homeTeam, awayTeam})  {

console.log("********  NUMBER 1 *********", homeTeamId)
console.log("********  NUMBER 2 *********", awayTeamId)
console.log("********  NUMBER 3 *********", hform)
console.log("********  NUMBER 4 *********", aform)
console.log("********  NUMBER 5 *********", homeTeam)
console.log("********  NUMBER 6 *********", awayTeam)


  if (typeof(aform) !== 'undefined') {
   if (typeof(hform) !== 'undefined') {

                var hcolor=[];
                var acolor=[];
                var index=0;

                for (index = 0; index < 5; ++index) {
                    if(hform[index]==="W") {
                         hcolor.push("green")
                    }
                    else if(hform[index]==="L") {
                        hcolor.push("red")
                    }
                    else {
                        hcolor.push("orange")
                    }
                }

                index = 0;
                for (index = 0; index < 5; ++index) {
                    if(aform[index]==="W") {
                         acolor.push("green")
                    }
                    else if(aform[index]==="L") {
                        acolor.push("red")
                    }
                    else {
                        acolor.push("orange")
                    }
                }
}

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
                                 <NextMatch homeTeam={homeTeam}  awayTeam={awayTeam}/>
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
return null
}