/**
 * 用户登陆组件
 */
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './login.less'
import logo from './images/logo.png'

const Item = Form.Item //不能写在import之前

class Login extends Component {


    handleSubmit  = (event) => {
        //阻止事件的默认行为(不提交表单)
        event.preventDefault()

        //对 所 有 表 单 字 段 进 行 检 验 
        this.props.form.validateFields( async (err, values) => {
            if (!err) {
                //校验成功
                const {username, password} = values 
                console.log('提交登陆请求', username, password)
            }else {
                //校验失败
                console.log(err)
            }
        })
        // //1.得到表单对象
        // const form = this.props.form
        // //获取表单项的输入数据
        // const values = form.getFieldsValue() 
        // console.log('handleSubmit()', values)
    }

    /* 对 密 码 进 行 自 定 义 验 证 */
    validatePwd =  (rule, value, callback) => { 
        console.log('validatePwd()', rule, value) 
        if (!value) {
            callback('密码不能为空！') 
        } else if (value.length < 4) { 
            callback('密码长度不能小于 4 位') 
        } else if (value.length > 12) { 
            callback('密码长度不能大于 12 位') 
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文、数字或下划线组成') 
        } else { 
            callback() // 验 证 通 过 
        } 
        // callback('xxxx') // 验 证 失 败 , 并 指 定 提 示 的 文 本

    }
     
    render () {

        //1.获取具有与强大功能的form对象
        const form = this.props.form
        const {  getFieldDecorator } = form
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src= {logo} alt='logo'/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登陆</h2>
                    {
                        /* 
                            用户名的合法性要求:
                            1). 必 须 输 入 
                            2). 必 须 大 于 等 于 4 位 
                            3). 必 须 小 于 等 于 12 位 
                            4). 必 须 是 英 文 、 数 字 或 下 划 线 组 成 
                        */ 
                    }
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username', { //声明式验证
                                    rules: [
                                        { required: true, whitespace: true, message: '用户名不能为空!' },
                                        { min: 4, message: '用户名不能少于4个字符！'},
                                        { max: 12, message: '用户名不能超过12个字符！'},
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须包含英文、数字或下划线！'}
                                    ],

                                })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />
                            )}
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{
                                        validator: this.validatePwd
                                    }]
                                })(//自动以表单校验
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Item>
                    </Form>
                </section>

            </div>
        )
    }

}

const LoginForm = Form.create()(Login)

export default LoginForm