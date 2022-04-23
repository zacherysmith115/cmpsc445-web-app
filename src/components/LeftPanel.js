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
import React, { useState, useEffect } from 'react';

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

const listcount = 0;
const { SubMenu } = Menu;

let menuKey = 0;

function clickHandler() {
  return ++menuKey;
}

export function CompanyPanel() {

  const [data,setTickers]=useState([]);

	   // Collect Available Tickers
    useEffect(() => {
        fetch("http://localhost:5000/data/available")
        .then((res) => res.json()
            .then((data) => {
                setTickers(data)
                console.log(data)

            })
        );
    }, [])

    const ticky = data.tickers;

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

       <SubMenu key="sub1" icon={<PieChartOutlined />} title="Select a Company">
       <div className="scroll">
        {
        // Create as many menu items as tickers in the list
          ticky?.map((menuitem) => (
            <Menu.Item key={clickHandler()} icon={<PieChartOutlined />}>
            {menuitem}
            </Menu.Item>     
            ))}  
        </div>
      </SubMenu>
    </Menu>
    )
}

export default CompanyPanel