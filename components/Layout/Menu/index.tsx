import { Menu } from 'antd'
import { useState } from 'react'
import type { MenuProps } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

import { Items, rootSubmenuKeys, MenuItem } from './MenuOptions'
import { getTreeIds } from '@/utils/utils'
const MenuComponent: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const defaultOpenKeys = getTreeIds(Items, location.pathname, {
        children: 'children',
        id: 'key',
    })
    const [openKeys, setOpenKeys] = useState<string[]>([...defaultOpenKeys])
    console.log(location)
    const onClickMenuItem = (item: MenuItem) => {
        navigate(`${item.key}`)
    }
    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    }

    return (
        <Menu
            theme='dark'
            mode='inline'
            items={Items}
            openKeys={openKeys}
            onClick={onClickMenuItem}
            defaultSelectedKeys={[location.pathname]}
            onOpenChange={onOpenChange}
        />
    )
}
export default MenuComponent
