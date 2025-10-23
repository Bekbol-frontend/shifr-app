import { Card, Col, Row } from "antd";
import styles from "./FirstEncrypted.module.css";
import { TitleBlock } from "@/components/TitleBlock";

function FirstEncrypted() {
  return (
    <div className={styles.first}>
      <Card>
        <TitleBlock title="Formulani tusindiriw" />
        <Row gutter={16}>
          <Col span={12}>
            <Card>left</Card>
          </Col>
          <Col span={12}>
            <Card>right</Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default FirstEncrypted;
