import { Card, Col, InputNumber, Row, Select, Typography } from "antd";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./FirstForm.module.css";
import { useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

type FieldType = {
  text?: string;
  key?: string;
  operation?: string;
};

function FirstForm() {
  const [result, setResult] = useState<string>("");
  const { lang } = useAppContext();
  const { t } = useTranslation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const text = values.text || "";
    const key = Number(values.key) || 0;
    const operation = values.operation;

    const alphabet =
      lang === "qq"
        ? "AÁBDEFGǴHXÍIJKQLMNŃOÓPRSTUÚVWYZCCHSH"
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const mod = alphabet.length;

    const processText = (input: string) => {
      let out = "";
      let letterPosition = 0;

      for (let i = 0; i < input.length; i++) {
        const ch = input[i].toUpperCase();
        const index = alphabet.indexOf(ch);

        if (index === -1) {
          out += input[i];
          continue;
        }

        letterPosition++;

        let newIndex;
        if (operation === "encrypt") {
          // Shifrlash: E = (x + k + i) mod 26
          newIndex = (index + key + letterPosition) % mod;
        } else {
          // Deshifrlash: D = (y - (k + i)) mod 26
          newIndex = (index - ((key + letterPosition) % mod) + mod) % mod;
        }

        const newChar = alphabet[newIndex];

        // Original harfning katta yoki kichikligini saqlab qolish
        out +=
          input[i] === input[i].toLowerCase() ? newChar.toLowerCase() : newChar;
      }

      return out;
    };

    const finalResult = processText(text);
    setResult(finalResult);
  };

  return (
    <Card className={styles.card}>
      <Form
        name="first-form"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label={t("To restore the text, enter:")}
          name="text"
          rules={[{ required: true, message: t("Please input your text!") }]}
        >
          <TextArea rows={5} />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Operaciya:"
              name="operation"
              rules={[
                {
                  type: "string",
                  required: true,
                  message: t("Please input your operation!"),
                },
              ]}
            >
              <Select>
                <Select.Option value="encrypt">{t("Encryption")}</Select.Option>
                <Select.Option value="decrypt">{t("Decipher")}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<FieldType>
              label={t("Key")}
              name="key"
              rules={[
                {
                  type: "number",
                  required: true,
                  message: t("Please input your key!"),
                },
              ]}
            >
              <InputNumber min={1} max={100} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            {t("Get result")}
          </Button>
        </Form.Item>

        {result && (
          <>
            <Title level={4} className={styles.title}>
              {t("Result")}
            </Title>
            <Card>
              <Title level={5}>{result.toUpperCase()}</Title>
            </Card>
          </>
        )}
      </Form>
    </Card>
  );
}

export default FirstForm;
