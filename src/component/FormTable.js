import React from 'react'

export default function FormTable({ text }) {

let aform = ["W","L","D","L","W"]
    let acolor = []
    var index;
    for (index = 0; index < aform.length; ++index) {
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

  return (
                    <div style={{paddingLeft :"10rem" }}>
                       <table class="result" border="1">
                         <tr>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[0]}}>{aform[0]} </button>
                             </div>
                           </td>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : acolor[1]}} > {aform[1]}</button>
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
                    </div>

  )
}