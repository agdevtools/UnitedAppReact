import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';

class FormTable extends Component {

    constructor(props) {
            super(props)
            this.state = {
                aform: [],
                acolor: []}
        this.getForm = this.getForm.bind(this)
    }

    componentDidMount() {
        this.getForm();
    }

    getForm() {
        TeamDataService.getForm()
            .then(
                response => {
                    console.log(response);
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
                    <div style={{paddingLeft :"10rem" }}>
                       <table class="result" border="1">
                         <tr>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[0]}}>{this.state.aform[0]} </button>
                             </div>
                           </td>
                           <td>
                             <div>
                               <button className="btn-form btn-form-primary btn-form-details" style={{background : this.state.acolor[1]}} > {this.state.aform[1]}</button>
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