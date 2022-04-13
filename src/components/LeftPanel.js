/*!
  =========================================================
  * CMPSC445 Ant Design Dashboard - v1.0.0
  =========================================================
  * Project Team: 
  * Purpose: Stock Prediction Progressive Web App
  * Coded by Mio Diaz
  =========================================================
 */
import { Menu, Space, Divider } from 'antd';
import React from 'react';

import 'antd/dist/antd.css';
import '../index.css'

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HeartTwoTone,
  RocketTwoTone,
  ControlOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export function CompanyPanel() {
	
	return (
		<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

      <div className="space-align-container">
          <Space>
            <RocketTwoTone twoToneColor="#E63946" style={{ fontSize: '30px' }} />
          </Space>
          <Space direction="vertical">
            <span className="space-align-container">MioDash</span>  
          </Space>  
      </div>

      <div className="space-title-container">
          <Space>
            <ControlOutlined style={{ fontSize: '20px' }} />
          </Space>
          <Space direction="vertical">
            <span className="space-align-container">Select a Company</span>  
          </Space>  
      </div>

       <Divider></Divider>

      <Menu.Item key="1" icon={<PieChartOutlined />}>
      Company Name
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="SAP">
        <Menu.Item key="3">Some Comapany</Menu.Item>
        <Menu.Item key="4">Some Comapany</Menu.Item>
        <Menu.Item key="5">Some Comapany</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="NASDAQ">
        <Menu.Item key="6">Some Comapany</Menu.Item>
        <Menu.Item key="8">Some Comapany</Menu.Item>
      </SubMenu>
     <Menu.Item key="9" icon={<FileOutlined />}>
      Files
     </Menu.Item>

    </Menu>
         
		)
}


export default CompanyPanel