import React from 'react';
import { Typography } from 'antd';

function C(props) {

    const { Title } = Typography;

    return (
        <div style={{marginLeft:props.left}}>
            <Title level={1} style={{marginLeft:"50px"}}>C程序设计大赛</Title>
        </div>
    )
}

export default C