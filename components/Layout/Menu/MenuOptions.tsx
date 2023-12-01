import { MenuProps } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    MailOutlined,
    AppstoreOutlined,
} from '@ant-design/icons'

export type MenuItem = Required<MenuProps>['items'][number]
export const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']
export const Items: MenuItem[] = [
    {
        'key': '/home',
        'label': 'Option 1',
        'icon': <DesktopOutlined />,
    },
    {
        'key': '/about',
        'label': 'Option 2',
        'icon': <PieChartOutlined />,
    },
    {
        'key': 'sub1',
        'icon': <MailOutlined />,
        'children': [
            {
                'key': 'g1',
                'children': [
                    { 'key': '/list', 'label': 'Option 1' },
                    { 'key': '2', 'label': 'Option 2' },
                ],
                'label': 'Item 1',
            },
            {
                'key': 'g2',
                'children': [
                    { 'key': '3', 'label': 'Option 3' },
                    { 'key': '4', 'label': 'Option 4' },
                ],
                'label': 'Item 2',
            },
        ],
        'label': 'Navigation One',
    },
    {
        'key': 'sub2',
        'icon': <AppstoreOutlined />,
        'children': [
            { 'key': '5', 'label': 'Option 5' },
            { 'key': '6', 'label': 'Option 6' },
            {
                'key': 'sub3',
                'children': [
                    { 'key': '', 'label': 'Option 7' },
                    { 'key': '8', 'label': 'Option 8' },
                ],
                'label': 'Submenu',
            },
        ],
        'label': 'Navigation Two',
    },
]
