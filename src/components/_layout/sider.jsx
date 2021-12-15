import { DashboardFilled } from "@ant-design/icons";
import React from "react";
import Menu from "../Menu/Menu";

const _Sider = () => {
  return (
    <div className="border-end" style={{ height: "100%" }}>
      <div className="row pb-3">
        <h4>Logo Icon</h4>
      </div>
      <div className="row mb-2">
        <div style={{ fontSize: 10, fontWeight: "700", color: "grey" }}>
          GENERAL
        </div>
      </div>
      <Menu />
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default _Sider;
