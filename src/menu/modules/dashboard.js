import { HomeOutlined } from '@ant-design/icons'
const pre = '/dashboard/'
const dashboard = {
    path: '/dashboard',
    title: 'Dashboard',
    icon: <HomeOutlined />,
    children: [
        {
            path: `${pre}console`,
            title: '主控台'
        },
        {
            path: `${pre}analysis`,
            title: '分析页'
        }
    ]
}
export default dashboard
