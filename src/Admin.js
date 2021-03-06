import React from 'react';
import { Row, Col } from 'antd';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavLeft from './Components/NavLeft';

export default class Admin extends React.Component {

    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="20" className="main">
                    <Header>
                        Header
                    </Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer>
                        Footer
                    </Footer>
                </Col>
            </Row>
        )
    }
}