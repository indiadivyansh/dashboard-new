import { DownOutlined } from "@ant-design/icons/lib/icons";
import { Dropdown, Menu } from "antd";
import React from "react";

const MenuDropdown = () => {
  const menu = (
    <Menu style={{ fontSize: 11 }}>
      <Menu.Item>
        <span style={{ fontSize: 10 }}>1st Menu Item</span>
      </Menu.Item>
      <Menu.Item>
        <span style={{ fontSize: 10 }}>1st Menu Item</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      {/* <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Hover me <DownOutlined />
      </a> */}
      <span className="text-muted">
        This Week
        <DownOutlined style={{ paddingLeft: 5 }} />
      </span>
    </Dropdown>
  );
};

export default MenuDropdown;
