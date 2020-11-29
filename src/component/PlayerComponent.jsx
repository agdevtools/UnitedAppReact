import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import TeamDataService from '../service/TeamDataService';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import TextField from '@material-ui/core/TextField';

function action() {
window.location.href = "/playerCreate"
}

class PlayerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            playerId: '',
            playerName: '',
            errors: "",
            message: null,
            showingAlert: false,
            update2: false,
            value: 'Enter text'
        }
           this.onSubmit = this.onSubmit.bind(this)
           this.validate = this.validate.bind(this)
    }

        componentDidMount() {
        console.log("********* componentDidMount *********")
            // eslint-disable-next-line
            if (this.props.match.params.id == -1) {
                console.log("**** CREATE *****")
                this.state.value = "";
                return
            } else {
            console.log("*** DOING THE ELSE *** ")
                this.state.playerId = this.props.match.params.id;
            }

            TeamDataService.retrievePlayer(this.props.match.params.id )
                .then(response => this.setState({
                    playerId : response.data.playerId,
                    playerName: response.data.playerName
                }))
        }

    onSubmit(values) {
        console.log("confirmed");
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
                 this.props.history.push('/team')
                 return r.team
                 })
                 .catch( error => {
                 const response = error.response
                 console.log("this is the errors from unitedapp ", response.data.errorDetails)
                 this.validate(response.data.errorDetails)})
        } else {
                console.log("I'm doing this playerId set")
              player.playerId = this.props.match.params.id
              TeamDataService.updatePlayer(player.playerId, player.playerName, player)
                .then(() => this.props.history.push('/team'))
        }

}

      handleChange = (event) => {
        this.setState({
          value: event.target.value,
        });
      };

     handleClick = () => {
        this.setState({
          value:'',
        });
      };

    validate(values) {

    this.setState({errors: ""});
    console.log("These are the values passed in ", values);

    let errors = {}

//     if (!values.playerId) {
//          errors.playerId = 'Enter a Player Name'
//          errors.playerName = 'Enter a Player Name'
//     }

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

        return (
            <div className="container">
            <MyHeader/>
             <h3>Player</h3>
                <div className="container">
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
                                                       <div>
                                                        <p> </p>
                                                        </div>
                                                       <div spacing="10">
                                                  <TextField
                                                        id="playerId"
                                                        label="Shirt Number"
                                                        autoComplete="off"
                                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                                        name="playerId"
                                                        error={this.state.errors.playerId && touched.playerId}
                                                        variant="outlined"
                                                        fullWidth
                                                        onChange={handleChange}
                                                        autoFocus
                                                        helperText={
                                                        this.state.errors.playerId && touched.playerId
                                                        ? this.state.errors.playerId : null}
                                                        />
                                                                            </div>
                                                                                        <div><p> </p></div>

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

                                                                     <TextField
                                                                      id="testfield"
                                                                      value={this.state.value}
                                                                      disable='false'
                                                                      onChange={this.handleChange}
                                                                      label="test field"
                                                                      variant="outlined"
                                                                      fullWidth
                                                                      onChange={handleChange}
                                                                      />
                                                                       <div>  <p> </p> </div>

                                    <button className="btn btn-primary btn-details" type="submit">Save</button>
                                     <button onClick={this.handleClick}>Reset Text</button>
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