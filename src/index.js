import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";
import "@ant-design/pro-form/dist/form.css";
import "@ant-design/pro-table/dist/table.css";

import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
