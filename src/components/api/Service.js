// import React from 'react';
import axios from 'axios'
const baseUrl = "http://localhost:3001/cars"

class Service {

    static getApi(url) {
        return axios.get(baseUrl + url);
    }

    static postApi(url, data) {
        return axios.post(baseUrl + url, data);
    }

    static deleteApi(url) {
        return axios.delete(baseUrl + url);
    }

    static patchApi(url, obj) {
        return axios.patch(baseUrl + url, obj);
    }

}

export default Service