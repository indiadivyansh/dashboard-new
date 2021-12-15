import {
  CalendarFilled,
  DashboardFilled,
  FileDoneOutlined,
  ProjectFilled,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="row">
      {/* Menu Items */}
      <MenuItem icon={<DashboardFilled />} title="Dashboard" />
      <MenuItem icon={<ProjectFilled />} title="Projects" />
      <MenuItem icon={<CalendarFilled />} title="Calendar" />
      <MenuItem icon={<FileDoneOutlined />} title="Dashboard" />
      <MenuItem icon={<SettingOutlined />} title="Settings" />
    </div>
  );
};

export default Menu;
