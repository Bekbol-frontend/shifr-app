import { Card, Col, Row } from "antd";
import styles from "./FirstEncrypted.module.css";
import { TitleBlock } from "@/components/TitleBlock";
import { FormulaCard } from "@/components/FormulaCard";
import { useResponsive } from "@/hooks/useResponsive";
import FirstForm from "./FirstForm/FirstForm";
import { useTranslation } from "react-i18next";

function FirstEncrypted() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <div className={styles.first}>
      <Card className={styles.card}>
        <TitleBlock title={t("Edit the program")} />
        <Row gutter={[16, 16]}>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title={t("Encryption")}
              desc1={t("The encryption algorithm formula is:")}
              desc2="E = (x + k + i)mod26"
              desc3="Aziza, buradaki kelimeyi yazar mısın lütfen?"
            />
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title={t("Decipher")}
              desc1={t("The encryption algorithm formula is:")}
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
