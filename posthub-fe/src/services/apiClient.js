import axios from 'axios';

const apiURL = 'http://127.0.0.1:5000';

export const apiget = async (request) => {
    let url = `${apiURL}/${request.url}`;
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.get(url, headers)
        .then(res => {
            const data = res.data;

            let response = {
                status: 200,
                message: data.message,
                result: data.data
            };

            return response;
        })
        .catch(error => {
            console.error(`Error fetching data: ${error}`);
            return {
                status: 0,
                message: error.message,
                result: {}
            };
        });
}

export const apipost = async (request) => {
    let url = `${apiURL}/${request.url}`;
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return axios.post(url, request.data, headers)
        .then(res => {
            const data = res.data;

            let response = {
                status: 200,
                message: data.message,
                result: data.data
            };

            return response;
        })
        .catch(error => {
            console.error(`Error fetching data: ${error}`);
            return {
                status: 0,
                message: error.message,
                result: {}
            };
        });
}