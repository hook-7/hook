import { Button, Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';
import Loop from '@/components/Loop'
import interrsction from '@/components/Loop/intersection'

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  
  return (
    <Layout>
      <Button style={{width: "100px"}} onClick={interrsction}>测试</Button>
        <Loop text = {["first","second", "third","tourth","tifth","sixth"]}></Loop>
    </Layout>
  );
};

export default Guide;
