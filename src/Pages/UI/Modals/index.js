import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less';

export default () => {
    const [show, setShow] = useState({
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    });

    const handleOpen = (type) => {
        setShow({
            [type]: true
        })
    }

    const handleConfirm = (type) => {
        Modal[type]({
            title: 'Confirm',
            content: 'Do you know?',
            onOk() {
                console.log('ok');
            },
            onCancel() {
                console.log('cancel');
            }
        })
    }

    return (
        <div className="modal-container">
            <Card title="Basic Modals">
                <Button type="primary" onClick={() => {
                    handleOpen('showModal1')
                }}>Open</Button>
                <Button type="primary" onClick={() => {
                    handleOpen('showModal2')
                }}>DIY Content</Button>
                <Button type="primary" onClick={() => {
                    handleOpen('showModal3')
                }}>Top 20px</Button>
                <Button type="primary" onClick={() => {
                    handleOpen('showModal4')
                }}>Center</Button>
            </Card>
            <Modal title="React"
                visible={show.showModal1}
                onCancel={() => {
                    setShow({
                        showModal1: false
                    })
                }}>
                Welcome to my system!
            </Modal>
            <Modal title="React"
                visible={show.showModal2}
                okText="Next"
                cancelText="Quite"
                onCancel={() => {
                    setShow({
                        showModal2: false
                    })
                }}>
                Welcome to my system!
            </Modal>
            <Modal title="React"
                visible={show.showModal3}
                style={{ top: 20 }}
                onCancel={() => {
                    setShow({
                        showModal3: false
                    })
                }}>
                Welcome to my system!
            </Modal>
            <Modal title="React"
                wrapClassName="vertical-modal"
                visible={show.showModal4}
                onCancel={() => {
                    setShow({
                        showModal4: false
                    })
                }}>
                Welcome to my system!
            </Modal>
            <Card title="Confirm Modals">
                <Button type="primary" onClick={() => {
                    handleConfirm('info')
                }}>Info</Button>
                <Button type="primary" onClick={() => {
                    handleConfirm('success')
                }}>Success</Button>
                <Button type="primary" onClick={() => {
                    handleConfirm('error')
                }}>Error</Button>
                <Button type="primary" onClick={() => {
                    handleConfirm('warning')
                }}>Warning</Button>
                <Button type="primary" onClick={() => {
                    handleConfirm('confirm')
                }}>Confirm</Button>
            </Card>
        </div>
    )
}