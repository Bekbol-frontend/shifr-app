import { Card, Col, Row } from "antd";
import styles from "./FirstEncrypted.module.css";
import { TitleBlock } from "@/components/TitleBlock";
import { FormulaCard } from "@/components/FormulaCard";
import { useResponsive } from "@/hooks/useResponsive";
import FirstForm from "./FirstForm/FirstForm";

function FirstEncrypted() {
  const { isMobile } = useResponsive();

  return (
    <div className={styles.first}>
      <Card className={styles.card}>
        <TitleBlock title="Formulani tusindiriw" />
        <Row gutter={[16, 16]}>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title="Shifrlaw"
              desc1="Shifrlaw algoritmi formulasi:"
              desc2="E = (x + k + i)mod26"
              desc3="Aziza, buradaki kelimeyi yazar mısın lütfen?"
            />
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title="Deshifr"
              desc1="Shifrlaw algoritmi formulasi:"
              desc2="D = (y - (k + i))mod26"
              desc3="Aziza, buradaki kelimeyi yazar mısın lütfen?"
            />
          </Col>
        </Row>
      </Card>

      <FirstForm />
    </div>
  );
}

export default FirstEncrypted;
