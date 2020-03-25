import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const TEAM_API_URL = 'http://localhost:8080/team'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class TeamDataService {

    retrieveAllPlayers() {
        return axios.get(`${TEAM_API_URL}`);
    }
}

export default new TeamDataService()