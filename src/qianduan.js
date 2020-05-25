import React from 'react';
import { Typography } from 'antd';

function Qianduan(props) {

    const { Title } = Typography;

    return (
        <div style={{marginLeft:props.left}}>
            <Title level={1} style={{marginLeft:"50px"}}>前端开发大赛</Title>
        </div>
    )
}

export default Qianduan