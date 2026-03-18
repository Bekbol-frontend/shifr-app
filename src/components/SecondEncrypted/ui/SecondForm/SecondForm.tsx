import { Card, Col, InputNumber, Row, Select, Typography } from "antd";
import type { FormProps } from "antd";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./SecondForm.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/hooks/useAppContext";

const { Title } = Typography;

type FieldType = {
  text?: string;
  key?: string;
  operation?: string;
};

const alphabets: Record<string, string[]> = {
  en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  qq: [
    "A", "Á", "B", "D", "E", "F", "G", "Ǵ", "H", "X",
    "Í", "I", "J", "K", "Q", "L", "M", "N", "Ń", "O",
    "Ó", "P", "R", "S", "T", "U", "Ú", "V", "W", "Y", "Z", "C",
  ],
  ru: [
    "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И",
    "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т",
    "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь",
    "Э", "Ю", "Я",
  ],
};

function SecondForm() {
  const [result, setResult] = useState<string>("");
  const { t } = useTranslation();
  const { lang } = useAppContext();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const text = values.text || "";
    const key = Number(values.key) || 0;
    const operation = values.operation;

    // Joriy til alifbosini olish (default: en)
    const currentLang = (lang as string) in alphabets ? (lang as string) : "en";
    const alpha = alphabets[currentLang]; // uppercase harflar massivi
    const alphaSize = alpha.length;

    // Tez qidirish uchun: UPPERCASE harf -> index
    const charToIndex = new Map<string, number>();
    alpha.forEach((ch, idx) => {
      charToIndex.set(ch.toUpperCase(), idx);
    });

    const processText = (input: string) => {
      let out = "";

      for (let i = 0; i < input.length; i++) {
        const ch = input[i];
        const upperCh = ch.toUpperCase();

        // Alifboda yo'q belgilar o'zgarishsiz qoladi
        if (!charToIndex.has(upperCh)) {
          out += ch;
          continue;
        }

        const xi = charToIndex.get(upperCh)!;
        // Toq pozitsiya (1,3,5,...) => +key, juft pozitsiya (2,4,6,...) => -key
        const sign = (i + 1) % 2 === 1 ? 1 : -1;

        let resultIdx: number;
        if (operation === "encrypt") {
          resultIdx = (((xi + sign * key) % alphaSize) + alphaSize) % alphaSize;
        } else {
          resultIdx = (((xi - sign * key) % alphaSize) + alphaSize) % alphaSize;
        }

        // Asl harf katta yoki kichik ekanligini saqlash
        const isUpperCase = ch === ch.toUpperCase() && ch !== ch.toLowerCase();
        const newChar = alpha[resultIdx]; // alpha massivida uppercase saqlanadi

        out += isUpperCase ? newChar : newChar.toLowerCase();
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

export default SecondForm;