import React from "react";
import _CalendarSection from "../Calendar";
import MenuDropdown from "../Menu/MenuDropdown";

const content = () => {
  return (
    <div style={{ height: "100%", backgroundColor: "#F0F2F5" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col">
          <div className="row justify-content-between m-2 mt-3">
            <div className="col-md-4">
              <h5>Dashboard</h5>
            </div>
            <div
              className="col-md-5"
              style={{ fontSize: 10, textAlignLast: "end", paddingTop: 20 }}
            >
              {/* <div className="text-muted">This Week</div> */}
              <MenuDropdown />
            </div>
          </div>
        </div>
        <div
          className="col-md-3"
          style={{
            backgroundColor: "#fff",
            height: "100%",
            paddingLeft: 30,
            paddingTop: 10,
          }}
        >
          <_CalendarSection />
        </div>
      </div>
    </div>
  );
};

export default content;
