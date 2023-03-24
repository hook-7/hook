import { Button, Layout, Row, Typography } from 'antd';
import React, { useState } from 'react';
import styles from './Guide.less';
import Loop from '@/components/Loop'
import interrsction from '@/components/Loop/intersection'

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  const [dns , setDNS ] = useState("")
  
  return (
    <Layout>
      <Button style={{width: "100px"}} onClick={()=>{fetch("/update").then(response => response.text()) .then(text => setDNS(text))
   
       }}>更新DNS</Button>
      <h1>{dns}</h1>
        <Loop text = {["first","second", "third","tourth","tifth","sixth"]}></Loop>
    </Layout>
  );
};

export default Guide;
