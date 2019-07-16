import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { Menu, Icon,} from 'antd';

import menuList from "../../config/menuConfig"
import logo from "../../assets/images/logo.png"
import "./index.less"
const { SubMenu } = Menu;

   

export default class LeftNav extends Component {

    
    getMenuNodes = (menuList) => {
            return menuList.map(item => {
                if (!item.children) {
                    return <menuitem></menuitem>
                }

                
                return <SubMenu></SubMenu>
            })
    }

    render() {
        return (
            <div className = "left-nav">
                <Link className = "left-nav-link" to="/home">
                    <img src={logo} alt="logo"/>
                    <h1>管理平台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['/home']}
                    mode="inline"
                    theme="dark"
                >
                    {

                        this.getMenuNodes(menuList)
                    }                
                    {/* <Menu.Item key="/home">
                       <Link to="/home">
                            <Icon type="home" />
                            <span>首页</span>
                       </Link>
                    </Menu.Item>
                    <SubMenu
                        key="producs"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>我的订单</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/category">
                            <Link to="/category">
                                <Icon type="home" />
                                <span>分类</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to="/product">
                                <Icon type="home" />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu> */}
                   
                    
                </Menu>
            </div>
        )
    }
}
