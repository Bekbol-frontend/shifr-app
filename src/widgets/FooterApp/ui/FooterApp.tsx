import { Container } from "@/components/Container";
import { Typography, Layout } from "antd";
import styles from "./FooterApp.module.css";

const { Paragraph } = Typography;
const { Footer } = Layout;

function FooterApp() {
  return (
    <Footer className={styles.footer}>
      <Container>
        <Paragraph className={styles.desc}>
          © {new Date().getFullYear()} Aziza Tajimuratova
        </Paragraph>
      </Container>
    </Footer>
  );
}

export default FooterApp;
