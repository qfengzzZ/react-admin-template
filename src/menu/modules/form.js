import { AreaChartOutlined } from '@ant-design/icons'
const pre = '/form/'
const form = {
    path: '/form',
    title: '表单',
    icon: <AreaChartOutlined />,
    children: [
        {
            path: `${pre}basic`,
            title: '基础表单',
            // children: [
            //     {
            //         path: `${pre}basic/a`,
            //         title: '菜单一',
            //     },
            //     {
            //         path: `${pre}basic/b`,
            //         title: '菜单二',
            //     },
            //     {
            //         path: `${pre}basic/c`,
            //         title: '菜单三',
            //     }
            // ]
        },
        {
            path: `${pre}step`,
            title: '分布表单'
        },
        {
            path: `${pre}advance`,
            title: '高级表单'
        },
    ]
}
export default form
