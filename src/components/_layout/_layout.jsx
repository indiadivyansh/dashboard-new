import React from "react";
import { Layout, Menu } from "antd";
import _Sider from "./sider";
import _Header from "./header";
import _Content from "./content";

const { Header, Footer, Sider, Content } = Layout;

const _Layout = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingTop: 10, height: "100%" }}
      >
        <div class="row" style={{ height: "100%" }}>
          <div className="col-md-2" style={{ height: "100%" }}>
            <_Sider />
          </div>
          <div className="col-md-10" style={{ height: "100%" }}>
            <_Header />
            <div className="row" style={{ height: "100%", marginLeft: -24 }}>
              <_Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default _Layout;
