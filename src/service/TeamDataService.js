import axios from 'axios';
import getEnv from '../environment';

let TEAM_API_URL = ""
let FOOTIE_STATS_URL = ""

if (getEnv() === "local") {
    TEAM_API_URL = 'http://localhost:8080';
    FOOTIE_STATS_URL = 'http://localhost:8080/api'
}
else  {
TEAM_API_URL = 'https://unitedappapi.herokuapp.com'
FOOTIE_STATS_URL = 'https://footiestats.herokuapp.com/api'
}

class TeamDataService {

    retrieveAllPlayers() {
        return axios.get(`${TEAM_API_URL}/team`);
    }

    getLeague() {
            return axios.get(`${FOOTIE_STATS_URL}/league`);
    }

    getForm() {
            return axios.get(`${FOOTIE_STATS_URL}/form`);
    }

    deletePlayer(id) {
        return axios.delete(`${TEAM_API_URL}/team/${id}`);
    }

    retrievePlayer(id) {
        return axios.get(`${TEAM_API_URL}/team/${id}`);
    }

      updatePlayer(id, playerName, playerPosition, player) {
          console.log("Player payload is: ", player)
          return axios.put(`${TEAM_API_URL}/team`, player);
      }

      createPlayer(id, playerName, playerPosition, player) {
          console.log("Player payload is: ", player)
          return axios.post(`${TEAM_API_URL}/team`, player);
      }

}

export default new TeamDataService()