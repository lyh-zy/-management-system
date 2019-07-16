import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./index.less";

/*
layout
左侧导航栏
*/
export default class index extends Component {

    getMenuNodes = (menuList)=>{
        return menuList.map(item) => {
            if (!itme.children) {
                return 
            }
        }

    }
    render() {
        return (
            <div className="left-nav">
               <Link className="left-nav-link">
                   <img src="" alt=""/>
                   <h1></h1>
               </Link> 

            </div>
        )
    }
}
