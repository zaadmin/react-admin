/*
*应用的根组件
*/ 
import React, {Component} from 'react'
import { Button, message} from 'antd'

export default class App extends Component {
    sendMsg = () => {
        message.success('成功啦！！')
    }
    render(){
        return <Button type="primary" onClick = { this.sendMsg }>按钮</Button> 
    }
}
