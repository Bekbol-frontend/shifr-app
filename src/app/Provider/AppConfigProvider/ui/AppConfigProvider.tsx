import type { ReactNode } from "react";
import { ConfigProvider } from "antd";

interface IProps {
  children: ReactNode;
}

function AppConfigProvider({ children }: IProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#fff",
            headerPadding: 0,
            headerHeight: 80,
            footerBg: "#fff",
            footerPadding: 0,
          },
          Typography: {
            titleMarginBottom: 0,
            fontSize: 17,
          },
          Input: {
            controlHeight: 37,
          },
          Button: {
            controlHeight: 37,
          },
          InputNumber: {
            controlHeight: 37,
          },
          Select: {
            controlHeight: 37,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AppConfigProvider;
