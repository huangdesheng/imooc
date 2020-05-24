import React from 'react'
import {NavLink} from 'react-router-dom'
import menuList from '../../resource/menuConfig'
import logo from '../../assets/images/xq-logo.png'
import { Menu } from 'antd';
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount() {
        let menuTreeNode = this.renderMenu(menuList)
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return <SubMenu key={item.key} title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logo}></img>
                    Imooc MS
                </div>
                <Menu theme="dark">
                    {/* <SubMenu key="sub1" title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu> */}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}