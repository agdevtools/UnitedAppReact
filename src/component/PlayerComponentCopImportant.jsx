import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TeamDataService from '../service/TeamDataService';
import ConfirmationDialog from './ConfirmationDialog';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

class PlayerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            playerId: '',
            playerName: '',
            isCreate : false
        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)
           this.saveClicked = this.saveClicked.bind(this)

           if (this.state.id == -1) {
              this.state.isCreate = true
           }

    }

        componentDidMount() {
            // eslint-disable-next-line
            if (this.state.id == -1) {
                return
            }

            TeamDataService.retrievePlayer(this.state.id )
                .then(response => this.setState({
                    playerId : response.data.playerId,
                    playerName: response.data.playerName
                }))
        }

    onSubmit(values) {

      console.log("*********")
        console.log("***** onsubmit ****")
                   console.log("*********")
                        console.log(values)
                        console.log(this.player)
                        console.log(this.state.playerName)
                        console.log(this.state.player)
                        console.log("*********")

        let player = {
            playerId: values.playerId,
            playerName: values.playerName
        }

        if ( this.state.isCreate === true) {
              console.log("doing iscreate should be true ", this.state.isCreate)
              TeamDataService.createPlayer(player.playerId, player.playerName, player)
                .then(() => this.props.history.push('/team'))
        } else {
                 console.log("this should be false - ", this.state.isCreate)
              TeamDataService.updatePlayer(this.state.playerId, player.playerName, player)
                .then(() => this.props.history.push('/team'))
        }

        console.log(values);
    }

            saveClicked(values) {
                console.log("*********")
                console.log(values)
                console.log(this.player)
                console.log(this.state.playerName)
                console.log(this.state.player)
                console.log("*********")

                    let player = {
                        playerId: values.playerId,
                        playerName: values.playerName
                    }
                this.validate(player)
                this.onSubmit(player)
                this.props.history.push(`/team`)
            }


validate(playerId, playerName) {
  console.log("*********")
    console.log("***** validate ****")
               console.log("*********")
                    console.log(playerName)
                    console.log(this.player)
                    console.log(this.state.playerName)
                    console.log(this.state.playerId)
                    console.log("*********")

    let errors = {}
    if (playerName) {
        errors.playerName = 'Enter a Player Name'
    } else if (playerName.length < 3) {
        errors.playerName = 'Enter at least 3 Characters in Player Name'
    }

                  let values = {
                             playerId,
                             playerName
                         }
    this.onSubmit(values)

    return errors
}

    render() {

        let { playerId, playerName } = this.state
         console.log("****  RENDER *****")

         console.log(playerId)
         console.log(playerName)

         console.log("****  RENDER *****")
        return (
            <div className="container">
            <MyHeader/>
             <h3>Player</h3>
                <div className="container">
                    <Formik
                        initialValues={{ playerId, playerName }}
                           onSubmit={this.onSubmit}
                              validateOnChange={false}
                              validateOnBlur={false}
                              validate={this.validate}
                              enableReinitialize={true}

                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="playerName" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>playerId</label>
                                        <Field className="form-control" type="text" name="playerId" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>playerName</label>
                                        <Field className="form-control" type="text" name="playerName" />
                                    </fieldset>
                                    <button className="btn btn-success" type="button" data-toggle="modal" data-target="#basicExampleModal">Save</button>

    <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          Are you sure you wish to create this player?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" onClick={this.submit}>Save changes</button>
          </div>

        </div>
      </div>
    </div>
                                </Form>
                            )
                        }
                    </Formik>


                </div>
                       <MyFooter/>
            </div>
        )
    }
}

export default PlayerComponent