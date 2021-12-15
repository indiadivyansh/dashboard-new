import React from "react";

const content = () => {
  return (
    <div style={{ height: "100%", backgroundColor: "#F0F2F5" }}>
      <div className="row">
        <div className="col">
          <div className="row justify-content-between  m-2 mt-3">
            <div className="col-md-4">
              <h5>Dashboard</h5>
            </div>
            <div className="col-md-4" style={{ fontSize: 10 }}>
              <div>This Week</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">Calendar</div>
      </div>
    </div>
  );
};

export default content;
