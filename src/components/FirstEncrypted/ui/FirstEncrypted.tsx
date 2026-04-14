import { Card, Col, Flex, Row, Typography } from "antd";
import styles from "./FirstEncrypted.module.css";
import { TitleBlock } from "@/components/TitleBlock";
import { FormulaCard } from "@/components/FormulaCard";
import { useResponsive } from "@/hooks/useResponsive";
import FirstForm from "./FirstForm/FirstForm";
import { useTranslation } from "react-i18next";

const { Paragraph } = Typography;

function FirstEncrypted() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <div className={styles.first}>
      <Card className={styles.card}>
        <Paragraph>{t("algoritm text top")}</Paragraph>
        <Flex
          vertical={isMobile}
          gap={isMobile ? 10 : 20}
          className={styles.flex}
        >
          <Paragraph strong className={styles.formulaDesc}>
            <div
              dangerouslySetInnerHTML={{ __html: t("algoritm text formula 1") }}
            />
          </Paragraph>
          <Paragraph strong className={styles.formulaDesc}>
            <div
              dangerouslySetInnerHTML={{ __html: t("algoritm text formula 2") }}
            />
          </Paragraph>
        </Flex>
        <Paragraph>{t("algoritm text bottom")}</Paragraph>
      </Card>
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
