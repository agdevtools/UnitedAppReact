import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Navbar from './NavBar';

class TeamComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPlayers();
    }

    refreshPlayers() {
        TeamDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data.team })
                }

            , (error) => {
              console.log("there was an error defaulting to default player list");
              this.setState({ players : [{playerId: "10", playerName: "Marcus Rashford"},
                                         {playerId: "18", playerName: "Bruno Fernandes"},
                                         {playerId: "2", playerName: "Victor Lindelof"},
                                         {playerId: "7", playerName: "Edinson Cavani"},
                                         {playerId: "17", playerName: "Fred"},
                                         {playerId: "5", playerName: "Harry Maguire"}
              ]})
            }
  )
    }

        deletePlayerClicked(id) {
            TeamDataService.deletePlayer(id)
                .then(
                    response => {
                        this.setState({ message: `Delete of player number ${id} Successful` })
                        this.refreshPlayers()
                    }
                )

        }

        addPlayerClicked() {
            this.props.history.push(`/player/-1`)
        }

        updatePlayerClicked(id) {
            console.log('update ' + id)
            this.props.history.push(`/player/${id}`)
        }

        render() {
        return (
                <div className="container">
                <Navbar/>
                <div className="container">
                <p></p>
                <h3>First Team Squad 20/21 </h3>
                </div>
                <div> <p></p> </div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="container" background="white">
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Player Number</th>
                                <th>Player Name</th>
                                <th> </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map(
                                    player =>
                                        <tr key={player.playerId}>
                                            <td>{player.playerId}</td>
                                            <td>{player.playerName}</td>
                                            <td><button className="btn btn-primary btn-details" onClick={() => this.updatePlayerClicked(player.playerId)}>Update</button></td>
                                            <td><button className="btn btn-primary btn-details" onClick={() => this.deletePlayerClicked(player.playerId)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                      <div left-padding="15px">
                                    <button className="btn btn-primary btn-details" onClick={this.addPlayerClicked}>Add</button>
                                </div>
                </div>
                    <MyFooter/>
                 </div>

        )
    }

}
export default TeamComponent






