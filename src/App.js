/**
 * 应用根组件
 */
import React, {Component} from 'react'
import {Button, message} from 'antd'
import { BrowserRouter,hashRouter,switch,Route} from "react-router-dom"


class App extends Component {

  handleClick = () => {
    message.success('成功啦...');
  }

  render() {
    return (
     <hashRouter></hashRouter>
    )
  }
}

export default App
