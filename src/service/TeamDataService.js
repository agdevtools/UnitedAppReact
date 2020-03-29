import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const TEAM_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class TeamDataService {

    retrieveAllPlayers() {
        return axios.get(`${TEAM_API_URL}/team`);
    }

    deletePlayer(id) {
        //console.log('executed service')
        return axios.delete(`${TEAM_API_URL}/delete/{playerId}?playerId=${id}`);
    }

    retrievePlayer(id) {
        return axios.get(`${TEAM_API_URL}/team/${id}`);
    }

}

export default new TeamDataService()