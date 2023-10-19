import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000"

const response = (resp) => resp.data;

const requests = {
    get: (url) => axios.get(url).then(response),
}

const endPoints = {
    calc: () => requests.get("/calc")
}

export default endPoints
