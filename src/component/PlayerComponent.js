import React, { Component } from 'react';
import Select from 'react-select';
import { Formik, Form } from 'formik';
import TeamDataService from '../service/TeamDataService';
import Navbar from './NavBar';
import MyFooter from './MyFooter';
import TextField from '@material-ui/core/TextField';

function action() {
window.location.href = "/playerCreatec"
}

//Import React and Select

let playerP = "";

const position = [
  { value: 'goalkeeper', label: 'Goalkeeper' },
  { value: 'defender', label: 'Defender' },
  { value: 'midfield', label: 'Midfielder' },
  { value: 'striker', label: 'Striker' }
];

class PlayerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerId: '',
            playerName: '',
            playerPosition : '',
            errors: "",
            message: null,
            isDisabled: false
        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)
           PlayerComponent.handleReactSelectChange = PlayerComponent.handleReactSelectChange.bind(this)
    }

    componentDidMount() {
        console.log("********* componentDidMount *********")
        // eslint-disable-next-line
        if (this.props.match.params.id == -1) {
            console.log("**** CREATE MODE *****")
        } else {
        console.log("*** UPDATE MODE *** ")
          //  this.state.playerId = this.props.match.params.id;
            this.setState({
                    playerId : this.props.match.params.id,
                    isDisabled : true
            })
            this.state.isDisabled = true;
        }

        TeamDataService.retrievePlayer(this.props.match.params.id )
            .then(response => this.setState({
                playerId : response.data.team.playerId,
                playerName: response.data.team.playerName
            }))
        }

    onSubmit(values) {
        console.log("confirmed");
        this.setState({errors: ""});
        this.setState({message: null});

        let player = {
            playerId: values.playerId,
            playerName: values.playerName,
            playerPosition : playerP
        }
        console.log("player object is" , player)
         if (this.props.match.params.id < 0) {
         TeamDataService.createPlayer(player.playerId, player.playerName, player.playerPosition, player).then(r => {
         console.log("response is ",r);
         this.props.history.push('/team')
         return r.team
         })
         .catch( error => {
         const response = error.response
         console.log("this is the errors from unitedapp ", response.data.errorDetails)
         this.validate(response.data.errorDetails)})
         }
         else {
        console.log("I'm doing this playerId set")
        player.playerId = this.props.match.params.id
        TeamDataService.updatePlayer(player.playerId, player.playerName, player.playerPosition, player)
        .then(() => this.props.history.push('/team'))
        .catch( error => {
        const response = error.response
        console.log("this is the errors from unitedapp ", response.data.errorDetails)
        this.validate(response.data.errorDetails)})
         }

}

    static handleReactSelectChange(selectedPosition) {
            playerP = selectedPosition.label;
            console.log("value selected is ", playerP)
    }

    validate(values) {

        this.setState({errors: ""});
        console.log("These are the values passed in ", values);

        let errors = {}

       for (let i=0; i < values.length; i++) {
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

            const customStyles = {
              control: base => ({
                ...base,
                height: 60,
                minHeight: 60
              })
            };



        return (
            <div className="container">
            <Navbar/>
              <div className="container">
              <p> </p>
              <div>  <p> </p> <br></br> </div>
             <h3>Player</h3>
             </div>
                <div className="teamcontainer">
                <div className="container">
                              <div>  <p> </p> <br></br> </div>
                             <h3>Player</h3>
                             </div>
                    <Formik
                        initialValues={{
                            playerId: "",
                            playerName: ""
                            }}
                             onSubmit={this.onSubmit}
                             validateOnChange={false}
                             validateOnBlur={false}
                             enableReinitialize={true}
                    >
                        {({ handleChange, touched }) => (
                               <Form spacing="10">
                               <div> <p> </p></div>
                               <div spacing="10">
                                    <TextField
                                    id="playerId"
                                    value={this.state.playerId}
                                    label="Shirt Number"
                                    autoComplete="off"
                                    disabled={this.state.isDisabled}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    InputLabelProps={{
                                                shrink: true,
                                              }}
                                    name="playerId"
                                    error={this.state.errors.playerId && touched.playerId}
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                    helperText={
                                    this.state.errors.playerId && touched.playerId
                                    ? this.state.errors.playerId : null}
                                    />
                                       </div><div><p> </p> </div>

                                    <TextField
                                     name="playerName"
                                      error={this.state.errors.playerName && touched.playerName}
                                      label="Player Name"
                                      variant="outlined"
                                      autoComplete="off"
                                      fullWidth
                                      onChange={handleChange}
                                      id="playerName"
                                      helperText={
                                      this.state.errors.playerName && touched.playerName
                                      ? this.state.errors.playerName : null}
                                      />
                                     <div>  <p> </p> </div>
                                      <Select
                                      options = {position}
                                      styles={customStyles}
                                      onChange={PlayerComponent.handleReactSelectChange}
                                      />
                                      <div>  <p> </p> </div>
                                      <div><br></br>
                                      <p> </p>
                                      </div>
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