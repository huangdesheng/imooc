import React from 'react'
import {NavLink} from 'react-router-dom'
import menuList from '../../resource/menuConfig'
import logo from './../../assets/images/xq-logo.png'
import { Menu } from 'antd';
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    state = {}
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
                    <img src={logo} alt="加载中...." />
                    Imooc MS
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}