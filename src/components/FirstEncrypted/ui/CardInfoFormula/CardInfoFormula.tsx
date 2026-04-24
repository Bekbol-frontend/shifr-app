import { Card } from "antd";
import styles from "./CardInfoFormula.module.css";
import { useTranslation } from "react-i18next";
import EnInfo from "./EnInfo/EnInfo";
import QqInfo from "./QqInfo/QqInfo";
import RuInfo from "./RuInfo/RuInfo";

function CardInfoFormula() {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <Card className={styles.card}>
      {i18n.language === "en" ? (
        <EnInfo />
      ) : i18n.language === "qq" ? (
        <QqInfo />
      ) : (
        <RuInfo />
      )}
    </Card>
  );
}

export default CardInfoFormula;
