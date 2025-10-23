import { Flex, Typography } from "antd";
import styles from "./TitleBlock.module.css";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface IProps {
  title: string;
}

function TitleBlock({ title }: IProps) {
  return (
    <Flex align="center" gap={10} className={styles.titleBlock}>
      <InfoCircleOutlined style={{ fontSize: 18 }} />
      <Title level={3}>{title}</Title>
    </Flex>
  );
}

export default TitleBlock;
