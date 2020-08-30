import React, { Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TeamDataService from '../service/TeamDataService';
import Select from 'react-select'
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import TextField from '@material-ui/core/TextField';
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

        const options = [
          { value: '1', label: 'First Team' },
          { value: '2', label: 'Reserves' }
          ];

          let SignupSchema = yup.object().shape({
            firstName: yup.string().required("This field is required."),
            password: yup
              .string()
              .min(6, "Password is too short.")
              .max(20, "Password is too long.")
              .required("This field is required.")
          });




class PlayerComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            players: [],
            playerId: this.props.match.params.id,
            playerName: ''
        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)
          // this.refreshPlayers = this.refreshPlayers.bind(this)
    }


        componentDidMount() {
             // this.refreshPlayers();
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

//            refreshPlayers() {
//                TeamDataService.retrieveAllPlayers()
//                    .then(
//                        response => {
//                            console.log(response);
//                            this.setState({ players: response.data })
//                        }
//                    )
//            }

    onSubmit(values) {

        let player = {
            playerId: values.playerId,
            playerName: values.playerName
        }

        if (this.props.match.params.id == -1) {
              TeamDataService.createPlayer(player.playerId, player.playerName, player)
                .then(() => this.props.history.push('/team'))
        } else {
              TeamDataService.updatePlayer(this.state.playerId, player.playerName, player)
                .then(() => this.props.history.push('/team'))
        }

        console.log(values);
    }



validate(values) {
    let errors = {}
    if (!values.playerName) {
        errors.playerName = 'Enter a Player Name'
    } else if (values.playerName.length < 3) {
        errors.playerName = 'Enter at least 3 Characters in Player Name'
    }
        if (!values.playerId) {
            errors.playeId = 'Enter a Player id'
        } else if (values.playerId<= 0) {
            errors.playerId = 'Enter a number greater than 0 in Player Id'
        }

                if (!values.squad) {
                    errors.squad = 'Enter a Squad'
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
              initialValues={{
                firstName: ""
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values);
              }}
            >
                             {({ errors, handleChange, touched }) => (
                                <Form>
                                     <fieldset className="form-group">
                                        <label>Shirt Number</label>
                                        <Field className="form-control" type="text" name="playerId" />
                                        <ErrorMessage name="playerId" component="div" className="alert alert-warning" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Player Name</label>
                                        <Field className="form-control" type="text" name="playerName" />
                                        <ErrorMessage name="playerName" component="div" className="alert alert-warning" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                                      <div>
                                                        <label>Squad</label>

                                                        <Select className="form-control" type="text" name="squad"
                                                        isMulti
                                                        options = {options} />
                                                        <ErrorMessage name="squad" component="div" className="alert alert-warning" />

                                                        </div>
                                    </fieldset>
                                    <div>
                                     <TextField
                                                        error={errors.firstName && touched.firstName}
                                                        autoComplete="fname"
                                                        name="firstName"
                                                        variant="outlined"
                                                        fullWidth
                                                        onChange={handleChange}
                                                        id="firstName"
                                                        label="First Name"
                                                        autoFocus
                                                        helperText={
                                                          errors.firstName && touched.firstName
                                                            ? errors.firstName
                                                            : null
                                                        }
                                                      />
                                    </div>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            //)
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