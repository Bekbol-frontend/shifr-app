import { Card, Col, InputNumber, Row, Select, Typography } from "antd";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./FirstForm.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/hooks/useAppContext";

const { Title } = Typography;

type FieldType = {
  text?: string;
  key?: number;
  operation?: string;
};

function FirstForm() {
  const [result, setResult] = useState<string>("");
  const { t } = useTranslation();
  const { lang } = useAppContext();

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const text = values.text?.toUpperCase() || "";
    const key = Number(values.key) || 0;
    const operation = values.operation;

    const alphabets: Record<string, string[]> = {
      en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      qq: [
        "A",
        "Á",
        "B",
        "D",
        "E",
        "F",
        "G",
        "Ǵ",
        "H",
        "X",
        "Í",
        "I",
        "J",
        "K",
        "Q",
        "L",
        "M",
        "N",
        "Ń",
        "O",
        "Ó",
        "P",
        "R",
        "S",
        "T",
        "U",
        "Ú",
        "V",
        "W",
        "Y",
        "Z",
        "CH",
        "SH",
      ],
    };

    const alphabet = alphabets[lang] || alphabets["en"];
    const mod = alphabet.length;

    const processText = (input: string) => {
      let out = "";
      let i = 0;
      const upper = input.toUpperCase();
      const separators = new Set([" ", "\n", "\t", "-", "'", "’"]);

      const has2 = alphabet.some((a) => a.length === 2);

      for (let pos = 0; pos < upper.length; ) {
        const ch = upper[pos];

        if (separators.has(ch)) {
          out += ch;
          pos += 1;
          i = 0;
          continue;
        }

        let token: string | null = null;
        let tokenLen = 0;

        if (has2 && pos + 2 <= upper.length) {
          const s2 = upper.slice(pos, pos + 2);
          if (alphabet.indexOf(s2) !== -1) {
            token = s2;
            tokenLen = 2;
          }
        }

        if (!token) {
          const s1 = upper.slice(pos, pos + 1);
          if (alphabet.indexOf(s1) !== -1) {
            token = s1;
            tokenLen = 1;
          } else {
            out += s1;
            pos += 1;
            continue;
          }
        }

        const x = alphabet.indexOf(token);
        if (x !== -1) {
          let resultNum: number;
          if (operation === "encrypt") {
            resultNum = (x + key + i) % mod;
          } else {
            resultNum = (((x - (key + i)) % mod) + mod) % mod;
          }
          out += alphabet[resultNum];
          i++;
        } else {
          out += token;
        }

        pos += tokenLen;
      }

      return out;
    };

    const finalResult = processText(text);
    setResult(finalResult);
  };

  useEffect(() => {
    form.resetFields();
  }, [lang]);

  return (
    <Card className={styles.card}>
      <Form
        name="first-form"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <Form.Item<FieldType>
          label={t("To restore the text, enter:")}
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
              <Title level={5}>{result}</Title>
            </Card>
          </>
        )}
      </Form>
    </Card>
  );
}

export default FirstForm;
