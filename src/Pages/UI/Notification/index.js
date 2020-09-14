import React from 'react';
import { Card, Button, notification } from 'antd';

export default class Notification extends React.Component {

    openNotification(type, direction) {
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: 'Got Money!',
            description: '21 Days -- $5000'
        });
    }

    render() {
        return (
            <div className="content-container">
                <Card title="Notification" className="card-wrap">
                    <Button type="primary" onClick={() => { this.openNotification('success') }}>Success</Button>
                    <Button type="primary" onClick={() => { this.openNotification('info') }}>Info</Button>
                    <Button type="primary" onClick={() => { this.openNotification('warning') }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification('error') }}>Error</Button>
                </Card>
                <Card title="Notification" className="card-wrap">
                    <Button type="primary" onClick={() => { this.openNotification('success', 'topLeft') }}>Success</Button>
                    <Button type="primary" onClick={() => { this.openNotification('info', 'topRight') }}>Info</Button>
                    <Button type="primary" onClick={() => { this.openNotification('warning', 'bottomLeft') }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification('error', 'bottomRight') }}>Error</Button>
                </Card>
            </div>
        )
    }
}