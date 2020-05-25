import React from 'react';
import { Typography } from 'antd';

function Waibao(props) {

    const { Title } = Typography;

    return (
        <div style={{marginLeft:props.left}}>
            <Title level={1} style={{marginLeft:"50px"}}>大学生服务外包大赛</Title>
        </div>
    )
}

export default Waibao