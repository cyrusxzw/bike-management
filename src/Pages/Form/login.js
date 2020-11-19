import React from 'react';
import { Card, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockFilled } from '@ant-design/icons';


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
                                {
                                    min: 5, max: 10,
                                    message: 'Please input 5-10!',
                                },
                                {
                                    pattern: '^[a-zA-Z]+$',
                                    message: 'must enter letter only'
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined />} />
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
                            <Input.Password prefix={<LockFilled />} />
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
                            <Checkbox checked>记住密码</Checkbox>
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