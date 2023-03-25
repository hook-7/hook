import { Button, Layout, Row, Typography } from 'antd';
import React, { useState } from 'react';
import styles from './Guide.less';
import Loop from '@/components/Loop'
import useUser from '@/models/global'


interface Props {
  name: string;
}
let data: any =null ;
await fetch("/api/data", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
 
}).then(r=>r.json()).then(r=>data = JSON.parse(r) );

let loop = data.map((i: { [x: string]: string; })=>i["domain"]+ "  --------->    "+ i["date"])


// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  // const { name } = props;
  const {name, setName} = useUser()
  const [dns , setDNS ] = useState<any>(name)
  
  return (
    <Layout>
      <Button style={{width: "100px"}} type="primary" onClick={()=>{fetch("/api/update", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
 
})
.then(response => response.text())
.then(data => setDNS(data))
.catch(error => console.error(error))
   
       }}>更新DNS</Button>
      <h1>{dns}</h1>
        <Loop text = {loop}></Loop>
    </Layout>
  );
};

export default Guide;
