import React, { useState } from 'react';
import KeepAlive from 'react-activation';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';

const Home: React.FC =  () => {
  const { TabPane } = Tabs;

  const [activeKey, setActiveKey] = useState('1')

  const onChange = (key: string) => {
    setActiveKey(key)
    console.log(activeKey);
  };

  return (
    <KeepAlive>
      <Link to="/blog">About</Link>
      <Tabs activeKey={activeKey} onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </KeepAlive>
  )
}
export default Home
