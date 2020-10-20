import React from 'react';
import { Card, Tabs as Tab, message } from 'antd';
import { PlusOutlined, EditFilled, DeleteFilled } from '@ant-design/icons';

const TabPane = Tab.TabPane;

export default class Tabs extends React.Component {

    newTabIndex = 0;

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: 'This is the content of tab1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'This is the content of tab2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'This is the content of tab3',
                key: '3'
            }
        ]

        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    show(key) {
        message.info(`Hi, the active tab is ${key}`);
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab ${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div className="content-container">
                <Card title="Tabs" className="card-wrap">
                    <Tab defaultActiveKey="1" onChange={this.show}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3" disabled>Content of Tab Pane 3</TabPane>
                    </Tab>
                </Card>
                <Card title="Tabs with Icon" className="card-wrap">
                    <Tab defaultActiveKey="1" onChange={this.show}>
                        <TabPane tab={<span><PlusOutlined />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><EditFilled />Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><DeleteFilled />Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tab>
                </Card>
                <Card title="Dynamic Tabs" className="card-wrap">
                    <Tab
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return (
                                    <TabPane
                                        tab={panel.title}
                                        key={panel.key}>{panel.content}</TabPane>
                                )
                            })
                        }
                    </Tab>
                </Card>
            </div>
        )
    }
}