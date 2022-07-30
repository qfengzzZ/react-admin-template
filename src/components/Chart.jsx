import React from 'react'
import { Line, Column } from '@ant-design/plots'

export const LineChart = props => {
    const { data } = props
    const config = {
        data,
        height: 400,
        xField: 'genre',
        yField: 'sold',
        point: {
            size: 5,
            shape: 'diamond',
        },
    };
    return (
        <Line {...config} />
    )
}

export const ColumnChart = props => {
    const { data } = props
    const config = {
        data,
        height: 400,
        xField: 'genre',
        yField: 'sold',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
    };
    return (
        <Column {...config} />
    )
}
