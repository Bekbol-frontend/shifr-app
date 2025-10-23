import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app/App";
import "antd/dist/reset.css";
import "./app/styles/main.css";

import "@ant-design/v5-patch-for-react-19";

import "./config/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
