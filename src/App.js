/**
 * 应用根组件
 */
import React, {Component} from 'react'
import {Button, message} from 'antd'
import { BrowserRouter, hashRouter, Switch,Route} from "react-router-dom"

import login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

class App extends Component {

  handleClick = () => {
    message.success('成功啦...');
  }

  render() {
    return (
     <hashRouter>
       <switch>
         <Route path="" component={login}/>
         <Route path="" component={Admin
        }/>
         
       </switch>
     </hashRouter>
    )
  }
}

export default App
