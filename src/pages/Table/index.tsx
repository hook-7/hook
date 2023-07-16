import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Modal, QRCode, Space, Table, Tag, Upload } from 'antd';
import { ColumnsType } from 'antd/es/table';

const props: UploadProps = {
  action: '/upload',
  listType: 'picture-card',
  onPreview: (file) => {
    console.log(file);

  }
};

interface Files {
  _id: string;
  filename: string;
  file_path: string;
  updated_at: string;
}


const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const columns: ColumnsType<Files> = [
    {
      title: 'id',
      dataIndex: '_id',
      key: '_id',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '文件名称',
      dataIndex: 'filename',
      key: 'filename',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: '操作',
      dataIndex: 'file_path',
      key: 'file_path',
      render: (text) => (
        <Button onClick={() => {
          showModal()
          getURL(text)
        }}>显示二维码</Button>
      ),
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      key: 'updated_at',
      // render: (text) => <a>{text}</a>,
    }

  ];

  const getURL = (url: string) => {

    const currentProtocol = window.location.protocol;
    const currentHost = window.location.host;
    const currentURL = currentProtocol + '//' + currentHost;
    setDownloadUrl(currentURL + url)
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/filedata');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (<div>
    <Upload {...props} >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
    <Table columns={columns} dataSource={data.map((item) => ({
      ...item,
      key: item._id,
    }))} />

    <Modal title="扫码下载" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered={true}>
      <p>{ downloadUrl}</p>
      <Space direction="vertical" align="center">
        <QRCode value={ downloadUrl || '-'} />
      </Space>
    </Modal>
  </div>)
}




export default App;