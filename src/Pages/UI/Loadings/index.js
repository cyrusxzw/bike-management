import React from 'react';
import { Card, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.less';


export default class Loading extends React.Component {

    render() {
        const icon = <LoadingOutlined />
        return (
            <div className="content-container">
                <Card title="Spin" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{ margin: "0 20px" }} />
                    <Spin size="large" />
                </Card>
                <Card title="Alert">
                    <Spin>
                        <Alert
                            message="I-Bike"
                            type="info"
                            description="Welcome to I-Bike!" />
                    </Spin>
                    <Spin tip="Loading..." wrapperClassName="spin-middle">
                        <Alert
                            message="I-Bike"
                            type="info"
                            description="Welcome to I-Bike!" />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="I-Bike"
                            type="info"
                            description="Welcome to I-Bike!" />
                    </Spin>
                </Card>
            </div>
        )
    }
}