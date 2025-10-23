import { TitleBlock } from "@/components/TitleBlock";
import { Card, Col, Row } from "antd";
import styles from "./SecondEncrypted.module.css";
import { FormulaCard } from "@/components/FormulaCard";
import SecondForm from "./SecondForm/SecondForm";

function SecondEncrypted() {
  return (
    <div className={styles.second}>
      <Card className={styles.card}>
        <TitleBlock title="Formulani tusindiriw" />
        <Row gutter={16}>
          <Col span={12}>
            <FormulaCard
              title="Shifrlaw"
              desc1="Shifrlaw algoritmi formulasi:"
              desc2="Ei = (xi +(-1)i+1 * K)mod26"
              desc3="Ei = Taza hárip, xi = Hárip tártip nomeri, i = Háripler sanı,
                K=Gilt, mod =operaciyası háripti álipbeden shiģip qalmawın
                támiyinleydi"
            />
          </Col>
          <Col span={12}>
            <FormulaCard
              title="Deshifr"
              desc1="Shifrdi ashiw algoritmi formulası:"
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
