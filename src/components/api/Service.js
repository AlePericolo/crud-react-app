import axios from 'axios'

const baseUrl = "http://localhost:3001/cars"

class Service {

    static getAllApi() {
        return axios.get(baseUrl);
    }

    static getApi(url) {
        return axios.get(baseUrl + url);
    }

    static deleteApi(url) {
        return axios.delete(baseUrl + url);
    }

    static postApi(data) {
        return axios.post(baseUrl + '/', data);
    }

    static patchApi(url, data) {
        return axios.patch(baseUrl + url, data);
    }

}

export default Service