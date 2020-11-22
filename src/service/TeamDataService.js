import axios from 'axios';
import getEnv from '../environment';

let TEAM_API_URL = ""

if (getEnv() === "local") {
    TEAM_API_URL = 'http://localhost:8080';
}
else  {
TEAM_API_URL = 'https://unitedappapi.herokuapp.com'
}

class TeamDataService {

    retrieveAllPlayers() {
        return axios.get(`${TEAM_API_URL}/team`);
    }

    deletePlayer(id) {
        return axios.delete(`${TEAM_API_URL}/team/${id}`);
    }

    retrievePlayer(id) {
        return axios.get(`${TEAM_API_URL}/team/${id}`);
    }

      updatePlayer(id, playerName, player) {
          console.log("Player payload is: ", player)
          return axios.put(`${TEAM_API_URL}/team`, player);
      }

      createPlayer(id, playerName, player) {
          console.log("Player payload is: ", player)
          return axios.post(`${TEAM_API_URL}/team`, player);
      }

}

export default new TeamDataService()