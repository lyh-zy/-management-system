import React, { Component } from 'react'
import { Redirect,Switch,Route} from 'react-router-dom'

import { Layout } from 'antd';


import memoryUtils from '../../utils/memoryUtils'

import Left from "../../components/left-nav"
import header from "../../components/header"

export default class Admin extends Component {
    render() {

        // 读取保存的user, 如果不存在, 直接跳转到登陆界面
        const user = memoryUtils.user
        if (!user._id) {
            // this.props.history.replace('/login') // 事件回调函数中进行路由跳转
            return <Redirect to="/login" /> // 自动跳转到指定的路由路径
        }

        return (
            <div>
                <Layout style={{ height: '100%' }}>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content style={{ backgroundColor: 'white' }}>Content</Content>
                        <Footer style={{ textAlign: 'center', color: '#aaaaaa'}}>Footer</Footer>
                    </Layout>
                </Layout>
            </div> 
        )
    }
}
