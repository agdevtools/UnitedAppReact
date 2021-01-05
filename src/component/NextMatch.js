import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import HeaderText from './HeaderText';

export default function NextMatch({homeTeam , awayTeam}) {

  return (
        <div>
            <table class="resultInline">
                                     <tr>
                                       <td>

                                           <h3 style={{paddingTop :"1rem" ,paddingLeft :"1.5rem"}}  >{homeTeam}</h3>

                                       </td>
                                      <td>

                                          <h4 style={{paddingTop :"1rem" ,paddingLeft :"1.5rem"}}  > vs </h4>

                                      </td>
                                     <td>

                                         <h3 style={{paddingTop :"1rem" ,paddingLeft :"1.5rem"}}  >{awayTeam}</h3>

                                     </td>
                                       </tr>
                       </table>
         </div>
  )

}