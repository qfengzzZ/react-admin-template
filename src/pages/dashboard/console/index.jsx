import React from 'react'
import { Row, Col, Card, List, Typography, Statistic, Timeline } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import userImg from '@/assets/logo-small.png'
import styled from 'styled-components'
import { ColumnChart } from '@/components/Chart'

const CustomRow = styled(Row)`
    .user-card {
      display: flex;
      align-content: center;
      .user-card-img {
        height: 80px;
        img {
          height: 100%;
        }
      }
      .user-card-info {
        margin-left: 16px;
        span {
          display: block;
          margin: 12px 0;
        }
      }
    }
`

const Console = () => {
    const data1 = [
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
    const authorInfo = {
        name: '南樛_',
        job: '前端开发工程师',
        img: userImg
    }
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    return (
        <CustomRow>
            <Col span={24}>
                <Card>
                    <div className="user-card">
                        <div className="user-card-img">
                            <img src={authorInfo.img} alt=""/>
                        </div>
                        <div className="user-card-info">
                            <span>{authorInfo.name}</span>
                            <span>{authorInfo.job}</span>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={24}>
                <Card>
                    <ColumnChart data={data1} />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Statistic
                        title="上升趋势"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card>
                    <Statistic
                        title="上升趋势"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={24}>
                <Card>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </Card>
            </Col>
            <Col span={24}>
                <Card>
                    <Timeline>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>,
                </Card>
            </Col>
        </CustomRow>
    )
}
export default Console
