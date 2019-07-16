import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"

import { Menu, Icon,} from 'antd';

import menuList from "../../config/menuConfig"
import logo from "../../assets/images/logo.png"
import "./index.less"
import { get } from 'https';
const { SubMenu } = Menu;

   

 class LeftNav extends Component {

    /**
     * 根据指定menu数据数组生成<Menu.Item>和<SubMenu>的数组
     * reduce + 函数数组
     */
    getMenuNodes2 = (menuList) => {

        // 得到当前请求的path
        const path = this.props.location.pathname

        return menuList.reduce((pre, item) => {
            // 添加<Menu.Item></Menu.Item>
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else { // 添加<SubMenu></SubMenu>

                // 如果当前请求路由与当前菜单的某个子菜单的key匹配, 将菜单的key保存为openKey
                const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
                if (cItem) {
                    this.openKey = item.key
                }

                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes2(item.children)}
                    </SubMenu>
                ))
            }
            return pre
        }, [])
    }
/*
根据指定菜单数据列表产生<Menu>的子节点数组
使用 map() + 递归
*/
    getMenuNodes = (menuList) => {
            return menuList.map(item => {
                if (!item.children) {
                    return (
                        <Menu.Item key={item.key}>
                            <Link to={item.key}>
                                <Icon type={item.Icon} />
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                }
                return (//有下一项菜单项
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            })
    }
    render() {

        // 得到当前请求路径, 作为选中菜单项的key
        const selectKey = this.props.location.pathname
        console.log('selectKey',selectKey);
        return (
            <div className = "left-nav">
                <Link className = "left-nav-link" to="/home">
                    <img src={logo} alt="logo"/>
                    <h1>管理平台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={[selectKey]}
                    defaultOpenKeys={['/products']}
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

/**
 *  
 * */
export default withRouter(LeftNav)
