import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import MyFooter from './MyFooter';
import HeaderText from './HeaderText';

class TableComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            league: []
        }
        this.getLeague = this.getLeague.bind(this)
    }

    componentDidMount() {
        this.getLeague();
    }

    getLeague() {
        TeamDataService.getLeague()
            .then(
                response => {
                    console.log("league response is :", response);
                    this.setState({ league: response.data.standings[0].table })
                }

            , (error) => {
              console.log("there was an error defaulting to default player list");
            }
  )
    }

        render() {
        return (
                <div className="container">
                <div className="teamcontainer" background="white" style={{paddingTop:"6rem" }}>
                                <div className="boxing">
                                <div className="container">
                                <HeaderText text="Current Standings"/>
                                </div>
                                <div> <p></p> </div>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th></th>
                                <th>Team Name</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Lost</th>
                                <th>Drawn</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.league.map(
                                    league =>
                                        <tr key={league.position}>
                                            <td>{league.position}</td>
                                            <td><img src={league.team.crestUrl} className="crest" align="right"></img></td>
                                            <td>{league.team.name}</td>
                                            <td>{league.playedGames}</td>
                                            <td>{league.won}</td>
                                            <td>{league.lost}</td>
                                            <td>{league.draw}</td>
                                            <td>{league.points}</td>
                             </tr>
                                )
                            }
                        </tbody>
                    </table>
                  </div>

                </div>

                 </div>
        )
    }

}
export default TableComponent






