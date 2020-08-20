import axios from 'axios';

export default class Axois {
    static getWeather(options) {
        return axios.get(options.url);
    }
}