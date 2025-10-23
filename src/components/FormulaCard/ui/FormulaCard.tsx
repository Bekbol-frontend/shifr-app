import { Card, Flex, Typography } from "antd";
import styles from "./FormulaCard.module.css";
import { LockOutlined } from "@ant-design/icons";

const { Paragraph, Title } = Typography;

interface IProps {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
}

function FormulaCard({ title, desc1, desc2, desc3 }: IProps) {
  return (
    <Card className={styles.card}>
      <Flex align="center" gap={5} className={styles.formulaBlock}>
        <LockOutlined style={{ fontSize: 18 }} />
        <Title level={4}>{title}</Title>
      </Flex>
      <Paragraph>{desc1}</Paragraph>
      <Paragraph code>{desc2}</Paragraph>
      <Paragraph>{desc3}</Paragraph>
    </Card>
  );
}

export default FormulaCard;
