import React from "react";
import {
    Form,
    Input,
    Select,
    Button
} from 'antd';
import logo from './sucai/login/1.png'

function Register() {

    const {Option} = Select;

    const Sel = (
        <Form.Item name="prefix" noStyle>
            <Select style={{width: "80px"}} value='s2'>
                <Option value='19'>19</Option>
                <Option value='18'>18</Option>
                <Option value='17'>17</Option>
                <Option value='16'>16</Option>
            </Select>
        </Form.Item>
    )

    return (
        <div>
            <div>
                <img src={logo} style={{
                    width: "15%",
                    height: "15%",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "20px",
                    marginBottom:"10px"
                }} alt='logo'/>
            </div>
            <div style={{marginLeft:"65px"}}>
                <Form name='register' scrollToFirstError style={{width: "580px", marginLeft: "auto", marginRight: "auto"}}
                      labelCol={{span: 4}}
                      wrapperCol={{span: 14}}>
                    <Form.Item label='用户名' name='用户名' rules={[{
                        required: true,
                        message: '请输入用户名!'
                    }]}><Input></Input></Form.Item>
                    <Form.Item label='密码' name='密码' rules={[{
                        required: true,
                        message: '请输入密码!'
                    }]}><Input.Password/></Form.Item>
                    <Form.Item
                        name="确认密码"
                        label="确认密码"
                        dependencies={['密码']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('密码') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('两次输入的密码不一致！');
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item label='学号' name='学号' rules={[{
                        required: true,
                        message: '请输入学号!'
                    }]}>
                        <Input type='number'/>
                    </Form.Item>
                    <Form.Item label='学院' name='学院' rules={[{
                        required: true,
                        message: '请选择学院!'
                    }]}>
                        <Select>
                            <Option value="计算机信息工程学院">计算机信息工程学院</Option>
                            <Option value="汽车工程学院">汽车工程学院</Option>
                            <Option value="师范学院">师范学院</Option>
                            <Option value="土木建筑工程学院">土木建筑工程学院</Option>
                            <Option value="外国语学院">外国语学院</Option>
                            <Option value="人文学院学院">人文学院学院</Option>
                            <Option value="经济与管理学院">经济与管理学院</Option>
                            <Option value="航空与机械工程学院/飞行学院">航空与机械工程学院/飞行学院</Option>
                            <Option value="电气信息工程学院">电气信息工程学院</Option>
                            <Option value="光电工程学院">光电工程学院</Option>
                            <Option value="艺术与设计学院">艺术与设计学院</Option>
                            <Option value="化工与材料学院">化工与材料学院</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='班级' name='班级' rules={[{
                        required: true,
                        message: '请输入班级!'
                    }]}>
                        <Input addonBefore={Sel} style={{width:"100%"}}/>
                    </Form.Item>
                    <Form.Item label='姓名' name='姓名' rules={[{
                        required: true,
                        message: '请输入姓名!'
                    }]}><Input/></Form.Item>
                    <Form.Item label='手机号' name='手机号' rules={[{
                        required: true,
                        message: '请输入手机号!'
                    }]}><Input style={{width: '100%'}} type='number'/></Form.Item>
                    <Form.Item label='QQ' name='QQ' rules={[{
                        required: true,
                        message: '请输入QQ!'
                    }]}><Input type='number'/></Form.Item>
                    <Button type='primary' htmlType='submit' size='large' style={{marginLeft:"100px",marginBottom:"20px"}}>提交</Button>
                </Form>
            </div>
        </div>
    )
}


export default Register