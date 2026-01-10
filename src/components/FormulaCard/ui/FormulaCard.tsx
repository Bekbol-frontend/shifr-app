import { Card, Flex, Typography } from "antd";
import styles from "./FormulaCard.module.css";
import { LockOutlined } from "@ant-design/icons";

const { Paragraph, Title } = Typography;

interface IProps {
  title: string;
  desc1: string;
  desc2?: string;
  desc3: string;

  formula: "e" | "d";
}

function FormulaCard({ title, desc1, desc2, desc3, formula }: IProps) {
  return (
    <Card className={styles.card}>
      <Flex align="center" gap={5} className={styles.formulaBlock}>
        <LockOutlined style={{ fontSize: 18 }} />
        <Title level={4}>{title}</Title>
      </Flex>
      <Paragraph>{desc1}</Paragraph>
      {desc2 ? (
        <Paragraph code>{desc2}</Paragraph>
      ) : formula === "e" ? (
        <Paragraph code>
          <span>
            E<sub>i</sub> = ( x<sub>i</sub> + (-1)<sup>i+1</sup> * k)mod26
          </span>
        </Paragraph>
      ) : (
        <Paragraph code>
          <span>
            D<sub>i</sub> = ( x<sub>i</sub> - (-1)<sup>i+1</sup> * k)mod26
          </span>
        </Paragraph>
      )}
      <Paragraph>{desc3}</Paragraph>
    </Card>
  );
}

export default FormulaCard;
