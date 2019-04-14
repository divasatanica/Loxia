import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import "./style.less";

interface MenuItem {
    iconType: string;
    key: string | number;
    routePath: string;
    text: string;
}

const MenuList = ({menuItems, history}: any) => {
    function handleClick (pathname: string) {
        return function (): void {
            history.push({
                pathname
            });
        }
    }
    const selectedKeys = menuItems.filter((item: MenuItem) => {
        return item.routePath === history.location.pathname
    }).map((item: MenuItem) => item.key);
    return <Menu theme="dark" style={{height: "94vh", marginTop: "30px"}} selectedKeys={selectedKeys}>
        {menuItems ? menuItems.map((item: MenuItem) => {
            const handleRouter = handleClick(item.routePath);
            return <Menu.Item key={item.key} onClick={handleRouter}>
                    <Icon type={item.iconType}></Icon>
                    <span>{item.text}</span>
                </Menu.Item>
        }) : null}
    </Menu>
}

export default withRouter(MenuList);