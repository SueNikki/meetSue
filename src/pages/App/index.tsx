import { Layout, Menu } from 'antd';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Blog from '../Blog';
import Home from '../Home';
import './style.less';

const App: React.FC = () => {
  const { Header, Content, Sider } = Layout;

  const menuData = [
    { label: '首页', key: '/home' },
    { label: 'bolg', key: '/blog' },
  ];

  let navigate = useNavigate();

  return (
    <Layout className='app'>
      <Header className="app-header">
        <div className="app-logo">
          <img src={require('../../assets/logo.png')} alt="logo" />
          <span>遇见meeting</span>
          <div className='app-user'>
            <div className='app-avatar'></div>
            <span className='app-nickName'>nikki</span>
            <span className='app-nickName'>退出</span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="app-layout">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuData}
            onClick={(item: any) => {
              navigate(`${item.key}`);
            }}
          />
        </Sider>
        <Layout style={{ background: '#fafafa' }}>
          <Content
            className="app-content"
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App;
