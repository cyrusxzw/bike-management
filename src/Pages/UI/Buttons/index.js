import './index.less';
import React from 'react';
import { Card, Button } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, CloudDownloadOutlined } from '@ant-design/icons';

const Buttons = () => {
    return (
        <div className="button-container">
            <Card title="Basic Buttons">
                <Button type="primary">Ibike</Button>
                <Button>Ibike</Button>
                <Button type="dashed">Ibike</Button>
                <Button type="danger">Ibike</Button>
                <Button disabled>Ibike</Button>
            </Card>
            <Card title="Buttons Contain Icon">
                <Button icon={<PlusOutlined />}>Add</Button>
                <Button icon={<EditOutlined />}>Edit</Button>
                <Button icon={<DeleteOutlined />}>Delete</Button>
                <Button icon={<SearchOutlined />} shape="circle"></Button>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Button icon={<CloudDownloadOutlined />}>Download</Button>
            </Card>
        </div>
    )
}


export default Buttons;