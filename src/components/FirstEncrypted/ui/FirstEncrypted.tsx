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
              desc2={t("Ei = (xi + i + k)mod34")}
              desc3={t(
                "Ei = Shifrlanǵan hárip,   xi = háriptiń alfavittegi tártip nomeri, i = háriptiń sózdegi ornı, K=gilt, mod = háripti álipbeden shıǵıp qalmawın támiyinleydi.",
              )}
              formula="e"
            />
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title={t("Decipher")}
              desc1={t("The encryption algorithm formula is:")}
              desc2={t("Di = (y - (i + k))mod34")}
              desc3={t(
                "Shifrdi ashıw procesi de uqsas, biraq giltti alıw ('-') arqalı orınlanadı",
              )}
              formula="d"
            />
          </Col>
        </Row>
      </Card>

      <FirstForm />
    </div>
  );
}

export default FirstEncrypted;
