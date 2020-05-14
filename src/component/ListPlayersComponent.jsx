import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import PlayerComponent from './PlayerComponent';
import Logo from './logo2.png';
import myheader from './myheader';
import {
  Link
} from "react-router-dom";


class ListPlayersComponent extends Component {


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
                    this.setState({ players: response.data })
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
            this.props.history.push(`/team/-1`)
        }

        updatePlayerClicked(id) {
            console.log('update ' + id)
            this.props.history.push(`/team/${id}`)
        }

    render() {
        return (
                 <div className="container">
                 ReactDOM.render(myheader);
                <h3>First Team Squad 19/20 </h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
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
                                            <td><button className="btn btn-success" onClick={() => this.updatePlayerClicked(player.playerId)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deletePlayerClicked(player.playerId)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                      <div className="row">
                                    <button className="btn btn-success" onClick={this.addPlayerClicked}>Add</button>
                                </div>
                </div>
            </div>

        )
    }

}
export default ListPlayersComponent
