import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

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
            this.props.history.push(`/player/-1`)
        }

        updatePlayerClicked(id) {
            console.log('update ' + id)
            this.props.history.push(`/player/${id}`)
        }

        render() {
        return (
                <div className="container">

                <MyHeader/>
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
                                            <td><button className="btn btn-primary btn-details" onClick={() => this.updatePlayerClicked(player.playerId)}>Update</button></td>
                                            <td><button className="btn btn-primary btn-details" onClick={() => this.deletePlayerClicked(player.playerId)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                      <div className="row">
                                    <button className="btn btn-primary btn-details" onClick={this.addPlayerClicked}>Add</button>
                                </div>
                </div>
                    <MyFooter/>
                 </div>

        )
    }

}
export default TeamComponent






