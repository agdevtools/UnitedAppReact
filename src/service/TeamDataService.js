import axios from 'axios';

class TeamDataService {

    retrieveAllPlayers() {
        return axios.get(`/team`);
    }

    getLeague() {
            return axios.get(`/api/league`);
    }

    getForm() {
            return axios.get(`/api/form`);
    }

    getHomeForm(homeTeamId) {
            if (homeTeamId !== 'undefined') {
            console.log("************  calling API HOME FORM ************* with team id =", homeTeamId)
            return axios.get(`/api/form/${homeTeamId}`);
            }
            else return []
    }

    getAwayForm(awayTeamId) {

                        if (awayTeamId !== 'undefined') {
                        console.log("************  calling API AWAY FORM ************* with team id =", awayTeamId)
                        return axios.get(`/api/form/${awayTeamId}`);
                        }
                        else return []
    }

    getNextMatch() {
                return axios.get(`/api/next`);
        }

    deletePlayer(id) {
        return axios.delete(`/team/${id}`);
    }

    retrievePlayer(id) {
        return axios.get(`/team/${id}`);
    }

      updatePlayer(id, playerName, playerPosition, player) {
          console.log("Player payload is: ", player)
          return axios.put(`/team`, player);
      }

      createPlayer(id, playerName, playerPosition, player) {
          console.log("Player payload is: ", player)
          return axios.post(`/team`, player);
      }

}

export default new TeamDataService()