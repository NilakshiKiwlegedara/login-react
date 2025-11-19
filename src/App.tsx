import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Button, Divider, Form, Input, Typography, message } from 'antd'
import { GoogleOutlined, FacebookFilled, TwitterOutlined } from "@ant-design/icons";

function App() {
  const login = () => {
    message.success('Login Success');
  }
  return (
    <div className ="appBg">
      <Form className="loginForm" onFinish={login}>
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item rules={[
          {
            required: true,
            type: "email",
            message: "Please Enter Valid Email",
          },
        ]}
        label="Email" name={"myEmail"}>
          <Input placeholder="Enter your Email"/>
        </Form.Item>
        <Form.Item rules={[
          {
            required: true,
            message: "Please Enter Correct Password",
          },
        ]}
        label="Password" name={"myPassword"}>
          <Input.Password placeholder="Enter your Password"/>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>Login</Button>
        <Divider style={{borderColor: "black"}}>or Login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined className="socialIcon" onClick={login} style={{color:"red"}}/>
          <FacebookFilled className='socialIcon' onClick={login} style={{color:"blue"}}/>
          <TwitterOutlined className='socialIcon' onClick={login} style={{color:"cyan"}}/>
        </div>
      </Form>
    </div>
  );
}

export default App
