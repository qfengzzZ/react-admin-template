import React, { useState } from "react"
import { Row, Col, Progress, Divider, Card, Statistic } from 'antd';
import styled from "styled-components";
import { createFromIconfontCN } from '@ant-design/icons';
import { LineChart, ColumnChart } from '@/components/Chart'

const Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3063072_2ekx65x9yv8.js',
});

const CustomRow = styled(Row)`
    .card-item {
      text-align: center;
    }
    .total-chart {
      background: #fff;
      padding: 8px;
    }
`

const Analisis = () => {
    const [cardList]  = useState([
        {
            count: 151561,
            key: 1,
            name: '访问量',
            percent: 50
        },
        {
            count: 45645,
            key: 2,
            name: '销售量',
            percent: 30
        },
        {
            count: 9878,
            key: 3,
            name: '转化率',
            percent: 70
        },
        {
            count: 9565,
            key: 5,
            name: '用户量',
            percent: 80
        },
    ])
    const [cardList1] = useState([
        {
            name: '主页',
            key: 1,
            iconType: 'icon-a-gongwenbaogongwendai'
        },
        {
            name: '用户',
            key: 2,
            iconType: 'icon-zhanghu'
        },
        {
            name: '趋势',
            key: 3,
            iconType: 'icon-a-baogaoqushizoushi'
        },
        {
            name: '分析',
            key: 4,
            iconType: 'icon-a-huihuahuabicaibi'
        },
        {
            name: '报表',
            key: 5,
            iconType: 'icon-a-caijingzoushiqushi'
        },
        {
            name: '占比',
            key: 6,
            iconType: 'icon-a-fenxibaogaozhanbi'
        },
        {
            name: '男生',
            key: 7,
            iconType: 'icon-a-xingbienanshitouxiang'
        },
        {
            name: '女生',
            key: 8,
            iconType: 'icon-a-nvshengnvxingbietouxiang'
        },
    ])

    const data = [
        { genre: "一月", sold: 38 },
        { genre: "二月", sold: 52 },
        { genre: "三月", sold: 80 },
        { genre: "四月", sold: 135 },
        { genre: "五月", sold: 80 },
        { genre: "六月", sold: 70 },
        { genre: "七月", sold: 60 },
        { genre: "八月", sold: 55 },
        { genre: "九月", sold: 38 },
        { genre: "十月", sold: 80 },
        { genre: "十一月", sold: 70 },
        { genre: "十二月", sold: 60 },
    ];
    return (
        <CustomRow gutter={[16, 16]}>
            {
                cardList.map(item => {
                    return(
                        <Col xs={24} sm={12} md={12} lg={6} xl={6} key={item.key}>
                            <Card>
                                <Statistic value={item.count} />
                                <Progress percent={item.percent} status="active" showInfo={false} />
                                <Divider />
                                <span>{item.name}</span>
                            </Card>
                        </Col>
                    )
                })
            }
            {
                cardList1.map(item => {
                    return(
                        <Col xs={24} sm={8} md={6} lg={3} xl={3} key={item.key}>
                            <Card className="card-item">
                                <p><Icon style={{fontSize: '20px'}} type={item.iconType} /></p>
                                <h3>{item.name}</h3>
                            </Card>
                        </Col>
                    )
                })
            }
            <Col span={24}>
                <div className="total-chart">
                    <LineChart data={data} />
                </div>
            </Col>
            <Col span={24}>
                <div className="total-chart">
                    <ColumnChart data={data} />
                </div>
            </Col>
        </CustomRow>
    )
}
export default Analisis
