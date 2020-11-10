import React from 'react';
import { Card, Form, Input, Button } from 'antd';


export default class FormLogin extends React.Component {

    render() {
        const { Item } = Form;
        const onFinish = (values) => {
            console.log(values.username);
        }
        return (
            <div className="content-container">
                <Card title="Login Inline Form">
                    <Form layout="inline" onFinish={onFinish}>
                        <Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Item>

                        <Item
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
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Item>
                    </Form>
                </Card>
                <Card title="Login Horizontal Form">
                    <Form style={{ width: 300 }}>
                        <Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Item>

                        <Item
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
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Item>
                    </Form>
                </Card>
            </div >
        )
    }
}