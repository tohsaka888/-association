import React, {useState} from 'react';
import './App.css';
import {Form, Input, Button, Checkbox, Result} from 'antd';
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import Home from "./Home";
import logo from './sucai/login/1.png'

function Error() {
    return (
        <Result
            status="warning"
            title="密码错误--Your password is wrong!"
            extra={
                <Button type="primary" key="console">
                    <Link to='/'>回到主页</Link>
                </Button>
            }
            style={{marginLeft: "auto", marginRight: "auto"}}
        />
    )
}

function Login() {
    const [state, setState] = useState(false);
    const [time, setTime] = useState(1);
    if (state === true) {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home}></Route>
                </Switch>
            </Router>
        )
    } else if (state === false && time === 1) {
        console.log(time);
        return (
            <Switch>
                <Route path='/login' component={Choose}>
                    <Choose state={state} setState={setState} time={time} setTime={setTime}></Choose>
                </Route>
            </Switch>
        )
    } else if (time === 2) {
        console.log(time)
        return (
            <Switch>
                <Route path='/login' component={Error}></Route>
            </Switch>
        )
    }
}

function Choose(props) {

    const history = useHistory();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState();

    const send = async () => {
        const res = await fetch('http://localhost:8000', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user: user, pass: pass}),
            mode: "cors"
        })
        const data = await res.json();
        console.log(data);
        if (data.login === 'ok') {
            history.push('/home');
        } else {
            props.setState(false);
            props.setTime(2);
        }
    }

    return (
        <div>
            <img src={logo} style={{width:"15%",height:"15%",display:"flex",marginLeft:"auto",marginRight:"auto",marginTop:"50px"}} alt='logo'/>
            <Form style={{
                width: "500px",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: "20px",
                border: "1px solid #f0f0f0",
                padding: "25px",
                paddingBottom: "0px",
                borderRadius: "5px"
            }}>
                <Form.Item label="用户" name="username" rules={[{required: true, message: "请输入用户名：",}]}>
                    <Input onChange={(event) => {
                        setUser(event.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{required: true, message: "请输入密码：",},]}>
                    <Input.Password onChange={(event) => {
                        setPass(event.target.value)
                    }}/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住密码？</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={send}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;

