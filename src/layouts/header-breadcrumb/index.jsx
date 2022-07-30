import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Breadcrumb } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { setBreadcrumbList } from "@/store/modules/page";
import menuSider from "@/menu/sider"
import { getMatchMenu } from "@/utils";

const HeaderBreadcrumb = () => {
    const breadcrumbList = useSelector(state => state.page.breadcrumbList)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    useEffect(() => {
        const breadcrumbList = getMatchMenu(pathname, menuSider)
        dispatch(setBreadcrumbList(breadcrumbList))
    }, [pathname, dispatch])
    return (
        <Breadcrumb className="zw-layout-header-breadcrumb">
            {
                breadcrumbList.map((item, index) => {
                    return (
                        <Breadcrumb.Item key={item.path} href={index === breadcrumbList.length - 1? null : item.path}>
                            {item.title}
                        </Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}

export default HeaderBreadcrumb
