/*
*应用的根组件
*/ 
import React, {Component} from 'react'
//import { Button, message} from 'antd'测试antd是否引入成功
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {
   
    render(){
        return  (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component = {Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
