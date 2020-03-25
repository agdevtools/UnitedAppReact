import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';

class ListPlayersComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
        this.refreshPlayers = this.refreshPlayers.bind(this)
    }

    componentDidMount() {
        this.refreshPlayers();
    }

    refreshPlayers() {
        TeamDataService.retrieveAllPlayers()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
    }


    render() {
        return (
            <div className="container">
                <h3>All Players</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Player Number</th>
                                <th>Player Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map(
                                    player =>
                                        <tr key={player.playerId}>
                                            <td>{player.playerId}</td>
                                            <td>{player.playerName}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
export default ListPlayersComponent