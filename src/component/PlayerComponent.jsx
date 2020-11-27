import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TeamDataService from '../service/TeamDataService';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

class PlayerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerId: this.props.match.params.id,
            playerName: '',
            errors: "",
            message: null
        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)
    }

        componentDidMount() {
            // eslint-disable-next-line
            if (this.state.id == -1) {
                return
            }

            TeamDataService.retrievePlayer(this.state.playerId)
                .then(response => this.setState({
                    playerId : response.data.playerId,
                    playerName: response.data.playerName
                }))
        }

    onSubmit(values) {

        this.setState({errors: ""});
        this.setState({message: null});
        let player = {
            playerId: values.playerId,
            playerName: values.playerName
        }

        if (this.props.match.params.id == -1) {
                 console.log("calling team service ");
                 TeamDataService.createPlayer(player.playerId, player.playerName, player).then(r => {
                 console.log("response is ",r);
                 return r.team
                 })
                 .catch( error => {
                 const response = error.response
                 console.log("this is the errors from unitedapp ", response.data.errorDetails)
                 this.validate(response.data.errorDetails)})
        } else {
              player.playerId = this.props.match.params.id
              TeamDataService.updatePlayer(player.playerId, player.playerName, player)
                .then(() => this.props.history.push('/team'))
        }
    }


    validate(values) {

    this.setState({errors: ""});
    console.log("These are the values passed in ", values);
    let errors = {}

    for (let i=0; i < values.length; i++)
    {
    console.log("Target from error ", values[i].target);
    if (values[i].target === "Player Id") {
        console.log("turning on errors for ",values[i].target)
        errors.playerId = true;
        errors.playerId = values[i].message;
        }
   if (values[i].target === "Player Name") {
        errors.playerName = true;
        errors.playerName = values[i].message;
    }

      this.setState({errors: errors});

    }
    return errors

    }

    render() {

        let { playerId, playerName } = this.state

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

                                    <fieldset className="form-group">
                                        <label>playerId</label>
                                        <Field
                                        id="playerId"
                                        type="text"
                                        name="playerId"
                                        variant="outlined"
                                        error={this.state.errors.playerId}
                                        helperText={
                                        this.state.errors.playerId
                                        ? this.state.errors.playerId
                                        : null
                                        }/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>playerName</label>
                                        <Field
                                        className="form-control"
                                        id="playerName"
                                        variant="outlined"
                                        type="text"
                                        name="playerName"
                                        error={this.state.errors.playerName}/>
                                    </fieldset>
                                    <button className="btn btn-primary btn-details" type="submit">Save</button>
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