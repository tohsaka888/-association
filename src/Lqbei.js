import React from 'react';
import { Typography } from 'antd';

function Lqbei(props) {

    const { Title } = Typography;

    return (
        <div style={{marginLeft:props.left}}>
            <Title level={1} style={{marginLeft:"50px"}}>蓝桥杯软件设计大赛</Title>
        </div>
    )
}

export default Lqbei