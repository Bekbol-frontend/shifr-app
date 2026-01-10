import { FooterApp } from "@/widgets/FooterApp";
import { HeaderApp } from "@/widgets/HeaderApp";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styles from "./AppLayout.module.css";
import { AppConfigProvider } from "../../AppConfigProvider";
import { FirstEncrypted } from "@/components/FirstEncrypted";
import { SecondEncrypted } from "@/components/SecondEncrypted";
import { Container } from "@/components/Container";

function AppLayout() {
  return (
    <AppConfigProvider>
      <Layout className={styles.layout}>
        <HeaderApp />
        <Layout>
          <Content className={styles.content}>
            <Container>
              <FirstEncrypted />
              <SecondEncrypted />
            </Container>
          </Content>
        </Layout>
        <FooterApp />
      </Layout>
    </AppConfigProvider>
  );
}

export default AppLayout;
