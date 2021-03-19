import React from 'react';
import { Card, Table } from 'antd';
import Axios from 'axios';
import './index.less';



export default class BasicTable extends React.Component {

    state = {}
    componentDidMount() {

        Axios.get('/api/table/list').then(res => res.data.result.list).then(data => {
            this.setState({
                dataSource: data
            })
            console.log(data)
        })
    }


    onRowClick = (record, index) => {
        let selectKey = [index + 1];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id'
            },
            {
                title: 'Username',
                dataIndex: 'username'
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                render(gender) {
                    return gender === 1 ? '男' : '女'
                }
            },
            {
                title: 'Status',
                dataIndex: 'status',
                render(status) {
                    const config = {
                        '1': '咸鱼',
                        '2': '北大',
                        '3': '创业者',
                        '4': '风华',
                        '5': '百度'
                    }

                    return config[status]
                }
            },
            {
                title: 'Interest',
                dataIndex: 'interest'
            },
            {
                title: 'Birthday',
                dataIndex: 'birthday'
            },
            {
                title: 'Address',
                dataIndex: 'address'
            },
            {
                title: 'Time',
                dataIndex: 'time'
            },
        ]

        const rowSelection = {
            type: 'radio',
            selectedRowKeys: this.state.selectedRowKeys
        }

        return (
            <div className="content-container">
                <Card title='Basic Table'>
                    <Table dataSource={this.state.dataSource} columns={columns} />
                </Card>
                <br></br>
                <Card title='Selection Table'>
                    <Table
                        dataSource={this.state.dataSource}
                        columns={columns}
                        rowSelection={rowSelection}
                        onRow={
                            (record, index) => {
                                return {
                                    onClick: () => {
                                        this.onRowClick(record, index)
                                    }
                                }
                            }

                        }
                    />
                </Card>
            </div>
        )
    }
}