import React from 'react';
import { Card, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker } from 'antd';

export default class Register extends React.Component {
    render() {
        return (
            <div className="content-container">
                <Card title="注册表单">
                    <Form layout="inline">
                        <Form.Item
                            label="Username"
                            name="username">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}