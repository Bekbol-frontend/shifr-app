import { TitleBlock } from "@/components/TitleBlock";
import { Card, Col, Row } from "antd";
import styles from "./SecondEncrypted.module.css";
import { FormulaCard } from "@/components/FormulaCard";
import SecondForm from "./SecondForm/SecondForm";
import { useResponsive } from "@/hooks/useResponsive";
import { useTranslation } from "react-i18next";

function SecondEncrypted() {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();

  return (
    <div className={styles.second}>
      <Card className={styles.card}>
        <TitleBlock title={t("Edit the program")} />
        <Row gutter={[16, 16]}>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title={t("Encryption")}
              desc1={t("The encryption algorithm formula is:")}
              desc2="Ei = (xi +(-1)i+1 * K)mod26"
              desc3="Ei = Taza hárip, xi = Hárip tártip nomeri, i = Háripler sanı,
                K=Gilt, mod =operaciyası háripti álipbeden shiģip qalmawın
                támiyinleydi"
            />
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <FormulaCard
              title={t("Decipher")}
              desc1={t("The encryption algorithm formula is:")}
              desc2="Di = (xi -(-1)i+1 * K)mod26"
              desc3="Shifrdi ashiw procesi uqsas, biraq giltti alıw ('-') arqalı
                orınlanadı"
            />
          </Col>
        </Row>
      </Card>

      <SecondForm />
    </div>
  );
}

export default SecondEncrypted;
