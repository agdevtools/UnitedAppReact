import React, { Component } from 'react';
import TeamDataService from '../service/TeamDataService';
import MyFooter from './MyFooter';
import Navbar from './NavBar';

class TableComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            league: [],
            message: null
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
                <div>
                <Navbar/>
                </div>
                <div>
                <p></p>
                <h3>First Team Squad 20/21 </h3>
                </div>
                <div> <p></p> </div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="teamcontainer" background="white">
                                <div className="container">
                                <p></p>
                                <h3>League Table Season 20/21 </h3>
                                </div>
                                <div> <p></p> </div>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Rank</th>
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
                    <MyFooter/>
                 </div>

        )
    }

}
export default TableComponent






