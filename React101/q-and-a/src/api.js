import axios from "axios";


// This comes from the .env file in the root NPM folder i.e. Q-AND-A, in this instance.
// https://stackoverflow.com/questions/69568010/using-process-env-in-react
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const response = (resp) => resp.data;

const requests = {
    get: (url) => axios.get(url).then(response),
}

const endPoints = {
    home: () => requests.get("/"),
    homeq: () => requests.get("/q"),
    qa: () => requests.get("/qa"),
}

export default endPoints