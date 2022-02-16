import { DashboardFilled } from "@ant-design/icons";
import React from "react";

const MenuItem = (props) => {
  return (
    <div className="row">
      <div className="row">
        <div
          className="col"
          style={{
            padding: "1em 1em 1em 1em",
          }}
        >
          <div className="d-inline align-text-bottom pe-1">
            <span>{props.icon}</span>
          </div>{" "}
          <div
            className="d-inline align-text-bottom"
            style={{ fontSize: 11, fontWeight: "600" }}
          >
            <span>{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
