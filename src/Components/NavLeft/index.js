import './index.less';
import MenuConfig from '../../Config/menuConfig.js';
import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {

    state = {
        menuTreeNode: ""
    }

    componentDidMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo.svg" alt="" />
                    <h1>I-Bike</h1>
                </div>
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

