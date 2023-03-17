import axios from "axios";

export const request = (url, method, data) => {
    return axios({
        method: method || 'get',
        url: `http://10.0.2.2:8000/api/${url}`,
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
