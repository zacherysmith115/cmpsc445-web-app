/*!
  =========================================================
  * CMPSC445 Ant Design Dashboard - v1.0.0
  =========================================================
  * Project Team: 
  * Purpose: Stock Prediction Progressive Web App
  * Coded by Mio Diaz
  =========================================================
 */

import React, { useState, useEffect } from 'react';
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

import {
    AnimatedAxis, // any of these can be non-animated equivalents
    AnimatedGrid,
    AnimatedLineSeries,
    XYChart,
    Tooltip,
} from '@visx/xychart';

// For Testing
const selectedTicker = "AAPL";
const { Title } = Typography;

const recordedData = [
    { x: '2020-01-01', y: 50 },
    { x: '2020-01-02', y: 10 },
    { x: '2020-01-03', y: 20 },
];

const learnedData = [
    { x: '2020-01-01', y: 30 },
    { x: '2020-01-02', y: 40 },
    { x: '2020-01-03', y: 80 },
];

const accessors = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
};

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

  const [timeseries,setTimeseries]=useState([]);

    // Collect Selected Data
    useEffect(() => {
        fetch("http://localhost:5000/data/" + selectedTicker)
        .then((res) => res.json()
            .then((timeseries) => {
                setTimeseries(timeseries)
                //console.log(timeseries)

            })
        );
    }, [])

  const datez = timeseries.historic_timeseries;
  const valuez = timeseries.historic_timeseries;

// NEED TO CREATE THIS recordedData object FROM the fetched json

//    const recordedData = [
//        { x: '2020-01-01', y: 50 },
//        { x: '2020-01-02', y: 10 },
//        { x: '2020-01-03', y: 20 },
//    ];

const recordedData = []


//console.log(timeseries.historic_timeseries.values)
console.log(recordedData);


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
            <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
                <AnimatedAxis orientation="left" />
                <AnimatedAxis orientation="bottom" />
                <AnimatedGrid columns={false} numTicks={4} />
                <AnimatedLineSeries dataKey="Recorded Data" data={recordedData} {...accessors} />
                <AnimatedLineSeries dataKey="Learned Data" data={learnedData} {...accessors} />
                <Tooltip
                    snapTooltipToDatumX
                    snapTooltipToDatumY
                    showVerticalCrosshair
                    showSeriesGlyphs
                    renderTooltip={({ tooltipData, colorScale }) => (
                        <div>
                            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                                {tooltipData.nearestDatum.key}
                            </div>
                            {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                            {', '}
                            {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                        </div>
                )}
            />
    </XYChart>

        </Card>
    </div>

      <div className="cardbox">
        <Card size="medium" bordered={false}>
         <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
            <AnimatedAxis orientation="left" />
            <AnimatedAxis orientation="bottom" />
            <AnimatedGrid columns={false} numTicks={4} />
            <AnimatedLineSeries dataKey="Recorded Data" data={recordedData} {...accessors} />
            <AnimatedLineSeries dataKey="Learned Data" data={learnedData} {...accessors} />
            <Tooltip
                snapTooltipToDatumX
                snapTooltipToDatumY
                showVerticalCrosshair
                showSeriesGlyphs
                renderTooltip={({ tooltipData, colorScale }) => (
                    <div>
                        <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                            {tooltipData.nearestDatum.key}
                        </div>
                        {accessors.xAccessor(tooltipData.nearestDatum.datum)}
                        {', '}
                        {accessors.yAccessor(tooltipData.nearestDatum.datum)}
                    </div>
            )}
        />
    </XYChart>
</Card>
</div>

    </Space>

        )
}


export default Graph