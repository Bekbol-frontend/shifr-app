import { LangEnum } from "@/constants";
import { useAppContext } from "@/hooks/useAppContext";
import { TranslationOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Flex } from "antd";

const items: MenuProps["items"] = [
  {
    key: LangEnum.EN,
    label: "English",
  },
  {
    type: "divider",
  },
  {
    key: LangEnum.QQ,
    label: "Qaraqalpaq",
  },
];

function SwitchLang() {
  const { lang, changeLang } = useAppContext();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    changeLang(e.key as LangEnum);
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        onClick: handleMenuClick,
        defaultSelectedKeys: [lang],
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Flex align="center" justify="center" gap={5} style={{}}>
          <Button size="large" icon={<TranslationOutlined />} type="primary" />
        </Flex>
      </a>
    </Dropdown>
  );
}

export default SwitchLang;
