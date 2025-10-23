import { Card, Col, InputNumber, Row, Select, Typography } from "antd";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./FirstForm.module.css";
import { useState } from "react";
import { useAppContext } from "@/hooks/useAppContext";

const { Title } = Typography;

type FieldType = {
  text?: string;
  key?: string;
  operation?: string;
};

function FirstForm() {
  const [result, setResult] = useState<string>("");

  const { lang } = useAppContext();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const text = values.text || "";
    const key = Number(values.key) || 0;
    const operation = values.operation;

    // ✅ Alfavitni tanlaymiz
    const alphabet =
      lang === "qq"
        ? "AÁBDEFGǴHXÍIJKQLMNŃOÓPRSTUÚVWYZCCHSH"
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const mod = alphabet.length;

    const processText = (input: string) => {
      let out = "";

      for (let i = 0; i < input.length; i++) {
        const ch = input[i].toUpperCase();

        const index = alphabet.indexOf(ch);
        if (index === -1) {
          out += ch;
          continue;
        }

        let newIndex;
        if (operation === "encrypt") {
          newIndex = (index + key + (i + 1)) % mod;
        } else {
          newIndex = (index - (key + (i + 1)) + mod * 10) % mod;
        }

        const newChar = alphabet[newIndex];

        out += newChar;
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
          label="Tekstti qayta islew ushin kiritin:"
          name="text"
          rules={[{ required: true, message: "Please input your text!" }]}
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
                  message: "Please input your operation!",
                },
              ]}
            >
              <Select>
                <Select.Option value="encrypt">Shifrlaw</Select.Option>
                <Select.Option value="decrypt">Deshifrlaw</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Gilt:"
              name="key"
              rules={[
                {
                  type: "number",
                  required: true,
                  message: "Please input your key!",
                },
              ]}
            >
              <InputNumber
                min={1}
                max={100}
                style={{ width: "100%" }}
                onKeyDown={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Tekstti islep shigiw
          </Button>
        </Form.Item>

        {result && (
          <>
            <Title level={4} className={styles.title}>
              Natiyje:
            </Title>
            <Card>
              <Title level={5}>{result}</Title>
            </Card>
          </>
        )}
      </Form>
    </Card>
  );
}

export default FirstForm;
