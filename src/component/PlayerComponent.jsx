import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TeamDataService from '../service/TeamDataService';

const INSTRUCTOR = 'in28minutes'

class PlayerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerId: this.props.match.params.id,
            playerName: ''

        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        TeamDataService.retrievePlayer(this.state.id)
            .then(response => this.setState({
                playerName: response.data.playerName
            }))
    }

onSubmit(values) {
    console.log(values);
}

validate(values) {
    let errors = {}
    if (!values.playerName) {
        errors.playerName = 'Enter a Player Name'
    } else if (values.playerName.length < 3) {
        errors.playerName = 'Enter at least 3 Characters in Player Name'
    }

    return errors
}

    render() {

        let { playerName, playerId } = this.state

        return (
            <div>
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
                                        <Field className="form-control" type="text" name="playerId" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>playerName</label>
                                        <Field className="form-control" type="text" name="playerName" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default PlayerComponent