import { Card, Col, InputNumber, Row, Select, Typography } from "antd";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./SecondForm.module.css";
import { useState } from "react";

const { Title } = Typography;

type FieldType = {
  text?: string;
  key?: string;
  operation?: string;
};

function SecondForm() {
  const [result, setResult] = useState<string>("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const text = values.text || "";
    const key = Number(values.key) || 0;
    const operation = values.operation;

    // Alfabet (faqat harflar)
    const aCode = "a".charCodeAt(0);

    const processText = (input: string) => {
      let out = "";

      for (let i = 0; i < input.length; i++) {
        const ch = input[i];
        const lower = ch.toLowerCase();

        // Agar harf bo‘lmasa, o‘zgartirmay qo‘shamiz
        if (lower < "a" || lower > "z") {
          out += ch;
          continue;
        }

        const xi = lower.charCodeAt(0) - aCode;
        const sign = (i + 1) % 2 === 1 ? 1 : -1;

        let resultNum: number;
        if (operation === "encrypt") {
          resultNum = (((xi + sign * key) % 26) + 26) % 26;
        } else {
          resultNum = (((xi - sign * key) % 26) + 26) % 26;
        }

        const newChar = String.fromCharCode(aCode + resultNum);

        out += ch === ch.toUpperCase() ? newChar.toUpperCase() : newChar;
      }

      return out;
    };

    const finalResult = processText(text);
    setResult(finalResult);
  };

  return (
    <Card className={styles.card}>
      <Form
        name="second-form"
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
              <Title level={5}>{result.toUpperCase()}</Title>
            </Card>
          </>
        )}
      </Form>
    </Card>
  );
}

export default SecondForm;
