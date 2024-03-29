import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const response = (resp) => resp.data;

const requests = {
    get: (url) => axios.get(url).then(response),
    post: (url) => axios.post(url, {"words": "This is what words look like"})
                    .then(response)
}

const endPoints = {
    control: () => requests.get("/control"),
    sample: () => requests.get("/sample"),
    genwords: () => requests.post("/genwords")
}

export default endPoints