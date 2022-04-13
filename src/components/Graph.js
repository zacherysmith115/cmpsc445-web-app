/*!
  =========================================================
  * CMPSC445 Ant Design Dashboard - v1.0.0
  =========================================================
  * Project Team: 
  * Purpose: Stock Prediction Progressive Web App
  * Coded by Mio Diaz
  =========================================================
 */

import React from 'react';
import { Space, Card, Typography, Col, Row, Statistic, Empty } from 'antd';

import '../index.css';
import 'antd/dist/antd.css';

import {
  FolderTwoTone,
  RiseOutlined,
  StockOutlined,
  GoldTwoTone,
  BoxPlotTwoTone,
} from '@ant-design/icons';

const { Title } = Typography;

const chartData = {
        labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Total Commits',
                data: [35, 65, 33, 21, 57, 43, 13],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

export function Graph() {

	return(

	<Space direction="vertical" size="middle">

    <Space direction="horizontal" size="large">
    	<div className="cardbox">
                <Card bordered={false}>
                    <Statistic 
                    	title="Bitcoin" 
                    	value={11.28}
                    	precision={2}
                    	prefix={<StockOutlined />}
                    	suffix="%" />
                </Card>
        
    	</div>

    	<div className="cardbox">
    	
                <Card bordered={false}>
                    <Statistic 
                    	title="Microsoft" 
                    	value={11.28}
                    	precision={2}
                    	prefix={<RiseOutlined />}
                    	suffix="%" />
                </Card>
         
    	</div>

    	<div className="cardbox">
    	
                <Card bordered={false}>
                    <Statistic 
                    	title="Apple" 
                    	value={11.28}
                    	precision={2}
                    	prefix={<BoxPlotTwoTone twoToneColor="#F63E4F" />}
                    	suffix="%" />
                </Card>
     
    	</div>

    	   	<div className="cardbox">
    		
                <Card bordered={false}>
                    <Statistic 
                    	title="Gold" 
                    	value={9.3}
                    	precision={2}
                    	prefix={<GoldTwoTone twoToneColor="#F63E4F" />}
                    	suffix="%" />
                </Card>
           
    	</div>
    </Space>

    <div className="cardbox">
    	<Card size="medium" bordered={false}>
    		<Empty />
    	</Card>
    </div>

    <div className="cardbox">
    	<Card size="large" bordered={false}>
    		<Empty />
    	</Card>
    </div>

    </Space>

		)
}


export default Graph