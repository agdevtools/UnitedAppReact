import React, { Component, Container} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TeamDataService from '../service/TeamDataService';
import Select from 'react-select'
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import TextField from '@material-ui/core/TextField';

        const options = [
          { value: '1', label: 'First Team' },
          { value: '2', label: 'Reserves' }
          ];

class PlayerComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            players: [],
            playerId: this.props.match.params.id,
            playerName: '',
            teams: []
        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)
           this.handlethisChange = this.handlethisChange.bind(this)
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

    onSubmit(values) {

        let player = {
            playerId: values.playerId,
            playerName: values.playerName,
            firstName: values.firstName
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

handlethisChange(values) {

console.log("this is the handle change event ", values)

}

validate(values) {
    let errors = {}

    if (!values.firstName) {
                 errors.firstName = 'Enter a Player Name'
    }
    if (!values.playerName) {
        errors.playerName = 'Enter a Player Name'
    } else if (values.playerName.length < 3) {
        errors.playerName = 'Enter at least 3 Characters in Player Name'
    }
        if (!values.playerId) {
            errors.playerId = 'Enter a Player id'
        } else if (values.playerId<= 0) {
            errors.playerId = 'Enter a number greater than 0 in Player Id'
        }

     console.log("Squad is : ", values.squad)

    return errors
}

    render() {

        let { playerId, playerName } = this.state

        return (
            <div className="container">
            <MyHeader/>
             <h3>Player</h3>
                      <div>
                                              <p> </p>
                                              </div>
                <div className="container">
            <Formik
              initialValues={{
                firstName: "",
                playerName: "",
                playerId: "",
                squad:[],
              }}
              //validationSchema={SignupSchema}
              onSubmit={values => {
                console.log(values);
              }}
                                onSubmit={this.onSubmit}
                                validateOnChange={false}
                                validateOnBlur={false}
                                validate={this.validate}
                                enableReinitialize={true}
            >
                             {({ errors, handleChange, touched }) => (
                                <Form spacing="10">
                                <div>
                                 <p> </p>
                                 </div>
                                <div spacing="10">
                                        <TextField
                                         name="playerId"
                                          error={errors.playerId && touched.playerId}
                                          label="Shirt Number"
                                          variant="outlined"
                                          fullWidth
                                          onChange={handleChange}
                                          id="playerId"
                                          autoFocus
                                          helperText={
                                          errors.playerId && touched.playerId
                                          ? errors.playerId : null}
                                          />
                                </div>
                                <div><p> </p></div>
                                        <TextField
                                         name="playerName"
                                          error={errors.playerName && touched.playerName}
                                          label="Player Name"
                                          variant="outlined"
                                          fullWidth
                                          onChange={handleChange}
                                          id="playerName"
                                          helperText={
                                          errors.playerName && touched.playerName
                                          ? errors.playerName : null}
                                          />
                                         <div>  <p> </p> </div>
                                                      <div>
                                                        <label>squad</label>
                                                        <Select className="form-control" type="text" name="squad"
                                                        isMulti
                                                        id="squad"
                                                        ref={this.selectRef}
                                                        onChange={this.handlethisChange}
                                                        options = {options} />
                                                        </div>
                                     <div>
                                     <p> </p>
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

