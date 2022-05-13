import './App.css';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Header style={{ padding: 10 }}>
        <Avatar style={{ float: 'right' }} icon={<UserOutlined />} />
        <Title style={{ color: 'white',  textAlign: 'center' }} level={3}>Name Pronounciation Tool by Bifrost</Title>
      </Header>
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={['Home']}
            mode="inline"
          >
            <Menu.Item key='Home'>
              Home
          </Menu.Item>
          <Menu.Item key='profile'>
              User Profile
          </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: '0 50px' }}>
        
            <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
            
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}> Web Design Layout Created by Bifrost</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>  
  );
}

export default App;
