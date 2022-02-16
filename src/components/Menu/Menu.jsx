import {
  CalendarFilled,
  CalendarOutlined,
  DashboardFilled,
  DashboardOutlined,
  FileDoneOutlined,
  ProjectFilled,
  ProjectOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="row">
      {/* Menu Items */}
      <MenuItem icon={<DashboardOutlined />} title="Dashboard" />
      <MenuItem icon={<ProjectOutlined />} title="Projects" />
      <MenuItem icon={<CalendarOutlined />} title="Calendar" />
      <MenuItem icon={<FileDoneOutlined />} title="Dashboard" />
      <MenuItem icon={<SettingOutlined />} title="Settings" />
    </div>
  );
};

export default Menu;
