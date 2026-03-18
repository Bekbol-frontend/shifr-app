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
    const text = values.text || "";
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
        "C"
      ],
      ru: [
        "А",
        "Б",
        "В",
        "Г",
        "Д",
        "Е",
        "Ё",
        "Ж",
        "З",
        "И",
        "Й",
        "К",
        "Л",
        "М",
        "Н",
        "О",
        "П",
        "Р",
        "С",
        "Т",
        "У",
        "Ф",
        "Х",
        "Ц",
        "Ч",
        "Ш",
        "Щ",
        "Ъ",
        "Ы",
        "Ь",
        "Э",
        "Ю",
        "Я",
      ],
    };

    const alphabet = alphabets[lang] || alphabets["en"];
    const mod = alphabet.length;

    const processText = (input: string) => {
      let out = "";
      let i = 0;
      const separators = new Set([" ", "\n", "\t", "-", "'", "'"]);

      const has2 = alphabet.some((a) => a.length === 2);

      for (let pos = 0; pos < input.length; ) {
        const ch = input[pos];

        if (separators.has(ch)) {
          out += ch;
          pos += 1;
          i = 0;
          continue;
        }

        let token: string | null = null;
        let tokenLen = 0;
        let isUpperCase = false;

        if (has2 && pos + 2 <= input.length) {
          const s2 = input.slice(pos, pos + 2);
          const s2Upper = s2.toUpperCase();
          if (alphabet.indexOf(s2Upper) !== -1) {
            token = s2Upper;
            tokenLen = 2;
            isUpperCase = s2[0] === s2[0].toUpperCase();
          }
        }

        if (!token) {
          const s1 = input.slice(pos, pos + 1);
          const s1Upper = s1.toUpperCase();
          if (alphabet.indexOf(s1Upper) !== -1) {
            token = s1Upper;
            tokenLen = 1;
            isUpperCase = s1 === s1.toUpperCase();
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

          let resultChar = alphabet[resultNum];

          if (!isUpperCase) {
            resultChar = resultChar.toLowerCase();
          }

          out += resultChar;
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
  }, [form]);

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
