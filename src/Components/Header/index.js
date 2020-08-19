import './index.less';
import React from 'react';
import { Row, Col, Button } from 'antd';
import Util from '../../Utils/Utils.js';

export default class Header extends React.Component {
    state = {
        userName: ""
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
                        <span className="weather-detail">sun</span>
                    </Col>
                </Row>
            </div>
        )
    }
}