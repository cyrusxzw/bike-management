import axios from 'axios'

export default class Axios {
    static getWeather(options) {
        return axios.get(options.url);
    }
}