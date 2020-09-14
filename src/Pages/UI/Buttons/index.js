import './index.less';
import React from 'react';
import { useState } from 'react';
import { Card, Button, Radio } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, CloudDownloadOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

const Buttons = () => {

    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState();

    return (
        <div className="content-container">
            <Card title="Basic Buttons" className="card-wrap">
                <Button type="primary">Ibike</Button>
                <Button>Ibike</Button>
                <Button type="dashed">Ibike</Button>
                <Button type="danger">Ibike</Button>
                <Button disabled>Ibike</Button>
            </Card>
            <Card title="Buttons Contain Icon" className="card-wrap">
                <Button icon={<PlusOutlined />}>Add</Button>
                <Button icon={<EditOutlined />}>Edit</Button>
                <Button icon={<DeleteOutlined />}>Delete</Button>
                <Button icon={<SearchOutlined />} shape="circle"></Button>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Button icon={<CloudDownloadOutlined />}>Download</Button>
            </Card>
            <Card title="Loading" className="card-wrap">
                <Button type="primary" loading={loading}>Confirm</Button>
                <Button type="primary" shape="circle" loading={loading}></Button>
                <Button loading={loading}>Loading</Button>
                <Button shape="circle" loading={loading}></Button>
                <Button type="primary" onClick={() => {
                    setLoading(false)
                }}>Close</Button>
            </Card>
            <Card title="Button Group" className="card-wrap">
                <ButtonGroup>
                    <Button><ArrowLeftOutlined />Prev</Button>
                    <Button>Next<ArrowRightOutlined /></Button>
                </ButtonGroup>
            </Card>
            <Card title="Button Size" className="card-wrap">
                <RadioGroup defaultValue={size} onChange={(e) => {
                    setSize(e.target.value);
                }}>
                    <Radio value="small">Small</Radio>
                    <Radio>Medium</Radio>
                    <Radio value="large">Large</Radio>
                </RadioGroup>
                <Button type="primary" size={size}>Ibike</Button>
                <Button size={size}>Ibike</Button>
                <Button type="dashed" size={size}>Ibike</Button>
                <Button type="danger" size={size}>Ibike</Button>
            </Card>
        </div>
    )
}


export default Buttons;