/**
* 入口js
*/

import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
//import 'antd/dist/antd.css' 全局引入antd的样式，文件很大，采用按需引入相应的样式

//将App组件标签渲染到index页面的div上
ReactDom.render(<App />,document.getElementById('root'))
 