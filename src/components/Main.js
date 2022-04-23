/*!
  =========================================================
  * CMPSC445 Ant Design Dashboard - v1.0.0
  =========================================================
  * Project Team: 
  * Purpose: Stock Prediction Progressive Web App
  * Coded by Mio Diaz
  =========================================================
 */
import { Layout } from 'antd';
import React from 'react';

import Container from './Container.js'
import CompanyPanel from './LeftPanel.js'

import 'antd/dist/antd.css';
import '../index.css';

const { Header, Content, Footer, Sider } = Layout;

export function Main() {

    return (
      <Layout>

        <Sider >
           {/* company panel is left panel */}
          <CompanyPanel />
        </Sider>

        <Layout className="site-layout">

          <Content className="site-layout-content">
          	<Container />
          </Content>

          <Footer style={{ textAlign: 'center', background: "#557C93" }}>
            Penn State CMPSC 445 Final Project ©2022 Created by 
            <a className="link" href="https://github.com/Miablo"> Mio Diaz</a>
          </Footer>

        </Layout>

      </Layout>
    )
}

export default Main