import { SwitchLang } from "@/components/SwitchLang";
import { Flex, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./HeaderApp.module.css";

const { Title } = Typography;

function HeaderApp() {
  return (
    <Header className={styles.header}>
      <Flex align="center" justify="space-between" flex={1}>
        <Flex align="center" justify="center" gap={10}>
          <img
            src="/logo.png"
            alt="logo"
            style={{
              width: 70,
              height: 70,
            }}
          />
          <Title level={4}>Aziza</Title>
        </Flex>
        <Flex>
          <SwitchLang />
        </Flex>
      </Flex>
    </Header>
  );
}

export default HeaderApp;
