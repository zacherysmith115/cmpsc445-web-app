/*!
  =========================================================
  * CMPSC445 Ant Design Dashboard - v1.0.0
  =========================================================
  * Project Team: 
  * Purpose: Stock Prediction Progressive Web App
  * Coded by Mio Diaz
  =========================================================
 */
import { Layout, PageHeader, Space } from 'antd';
import { ScreenClassProvider } from 'react-grid-system';

import React from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import Graph from './Graph.js'

export function Main() {

  return (

    <ScreenClassProvider>

      <Layout style={{ padding: '24px' }} >
        <PageHeader 
          title="Title" 
          subTitle="This is a subtitle" />
          <Layout style={{ padding: '0 24px 24px' }}>
           
              <Graph />

          </Layout>

        </Layout>

    </ScreenClassProvider>

    )
}


export default Main