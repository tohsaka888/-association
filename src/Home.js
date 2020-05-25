import React, {useState} from 'react';
import './App.css';
import {Layout, Menu} from 'antd';
import {CrownOutlined} from "@ant-design/icons";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import Content from "./Content";
import Wx from "./WX";
import Qianduan from "./qianduan";
import C from './C'
import Lqbei from "./Lqbei";
import Waibao from "./Waibao";

function Home() {

    const {Header} = Layout;
    const {Item, SubMenu} = Menu;
    const {Sider} = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [left, setLeft] = useState("200px")

    const SetOnCollapsed = () => {
        if (collapsed === false) {
            setCollapsed(true);
            setLeft("80px");
        } else {
            setCollapsed(false);
            setLeft("200px")
        }
    }

    return (
        <div className="App">
            <Layout>
                <Header className="header" style={{
                    backgroundColor: "white",
                    zIndex: 1,
                    marginBottom: "5px",
                    display: "flex",
                    position: "fixed",
                    width: "100%"
                }}>
                    <div style={{borderBottom: "0px 2px 8px #f0f1f2", height: "100%", width: "100%"}}>
                        <h1 style={{fontWeight: "900"}}>常州工学院·程序员之家</h1>
                    </div>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" style={{fontWeight: "600"}}><Link to='/login'>登录</Link></Menu.Item>
                        <Menu.Item key="2" style={{fontWeight: "600"}}><Link to='/register'>注册</Link></Menu.Item>
                        <Menu.Item key="3" style={{fontWeight: "600"}}>登出</Menu.Item>
                    </Menu>
                </Header>
                <Router>
                    <Layout style={{marginTop: "66px"}}>
                        <Sider width={200} style={{backgroundColor: "white", position: 'fixed'}} collapsed={collapsed}
                               collapsible
                               theme="dark"
                               onCollapse={SetOnCollapsed}>
                            <Menu mode="inline" style={{height: "800px"}} defaultSelectedKeys={['1']}
                                  defaultOpenKeys={['sub1', 'sub2']}>
                                <SubMenu key="sub1" icon={<CrownOutlined/>}
                                         style={{width: "100%", textAlign: "left", fontSize: "16px", fontWeight: "900"}}
                                         title="历史比赛">
                                    <Item key="1"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}><Link to='/home/wx'>微信小程序开发比赛</Link></Item>
                                    <Item key="3"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}><Link to='/home/qianduan'>前端开发比赛</Link></Item>
                                    <Item key="4"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}><Link to='/home/c'>C程序设计大赛</Link></Item>
                                    <Item key="5"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}><Link to='/home/lqbei'>蓝桥杯软件设计大赛</Link></Item>
                                    <Item key="6"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}><Link to='/home/waibao'>大学生服务外包大赛</Link></Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<CrownOutlined/>}
                                         style={{width: "100%", textAlign: "left", fontSize: "16px", fontWeight: "900"}}
                                         title="获奖名单">
                                    <Item key="7"
                                          style={{
                                              width: "100%",
                                              textAlign: "center",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}>微信小程序开发比赛</Item>
                                    <Item key="8"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}>前端开发比赛</Item>
                                    <Item key="9"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}>C程序设计大赛</Item>
                                    <Item key="10"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}>蓝桥杯软件设计大赛</Item>
                                    <Item key="11"
                                          style={{
                                              width: "100%",
                                              textAlign: "right",
                                              fontSize: "13px",
                                              fontWeight: "900"
                                          }}>大学生服务外包大赛</Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Route path='/home' exact>
                            <Content left={left}/>
                        </Route>
                        <Route path='/home/wx' component={Wx}>
                            <Wx left={left}/>
                        </Route>
                        <Route path='/home/qianduan' component={Qianduan}>
                            <Qianduan left={left}/>
                        </Route>
                        <Route path='/home/c' component={C}>
                            <C left={left}/>
                        </Route>
                        <Route path='/home/lqbei' component={Lqbei}>
                            <Lqbei left={left}/>
                        </Route>
                        <Route path='/home/waibao' component={Waibao}>
                            <Waibao left={left}/>
                        </Route>
                    </Layout>
                </Router>
            </Layout>
        </div>
    );
}

export default Home;
