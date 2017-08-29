import React from "react";
import { BrowserRouter} from "react-router-dom";

import App from "../pages/app";

export default function () {
  // 用来判断本地浏览器是否支持刷新
  const supportsHistory = "pushState" in window.history;
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <App/>
    </BrowserRouter>
  );
}