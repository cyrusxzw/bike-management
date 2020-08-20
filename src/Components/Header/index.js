import './index.less';
import React from 'react';
import { Row, Col, Button } from 'antd';
import Util from '../../Utils/Utils.js';
import Axois from '../../Axois/index.js';

export default class Header extends React.Component {
    state = {
        userName: '',
        picUrl: '',
        weather: '',
        temperature: ''
    }
    componentDidMount() {
        this.setState({
            userName: "xyz"
        })
        setInterval(() => {
            let sysTime = Util.formatDate(new Date());
            this.setState(
                {
                    sysTime
                }
            )
        }, 1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData() {
        let city = 'melbourne';
        Axois.getWeather({
            url: `http://api.weatherstack.com/current?access_key=a8503431d7eeae0100eb9f9439f07018&query=${city}`
        }).then((res) => {
            window.data = res;
            if (res.status === 200) {
                const data = res.data.current;
                this.setState({
                    picUrl: data.weather_icons[0],
                    weather: data.weather_descriptions[0],
                    temperature: data.temperature
                })
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>Welcome, {this.state.userName}</span>
                        <Button type="link">Logout</Button>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        Home
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.picUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                        <span className="weather-temperature">
                            {this.state.temperature}℃
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}