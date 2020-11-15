import axios from 'axios'

const TEAM_API_URL = 'https://unitedappapi.herokuapp.com'

//const TEAM_API_URL = 'http://localhost:8080'

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
          return axios.put(`${TEAM_API_URL}/team/${playerName}/player/${id}`, player);
      }

      createPlayer(id, playerName, player) {
          return axios.post(`${TEAM_API_URL}/team`, player);
      }

}

export default new TeamDataService()