import React from 'react';
import { Typography } from 'antd';

function Wx(props) {

    const { Title } = Typography;

    return (
        <div style={{marginLeft:props.left}}>
            <Title level={1} style={{marginLeft:"50px"}}>微信小程序开发大赛</Title>
        </div>
    )
}

export default Wx