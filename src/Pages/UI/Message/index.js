import React from 'react';
import { Card, Button, message } from 'antd';

export default class Message extends React.Component {

    showMessage(type) {
        message[type]("Content added!")
    }

    render() {
        return (
            <div className="content-container">
                <Card title="Message" className="card-wrap">
                    <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
                </Card>
            </div>
        )
    }
}