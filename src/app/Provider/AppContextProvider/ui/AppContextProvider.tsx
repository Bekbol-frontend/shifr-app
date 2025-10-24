import { useCallback, useMemo, useState, type ReactNode } from "react";
import { AppContext } from "../config";
import { LangEnum } from "@/constants";
import { useTranslation } from "react-i18next";

interface IProps {
  children: ReactNode;
}

function AppContextProvider({ children }: IProps) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<LangEnum>(i18n.language as LangEnum);

  const changeLang = useCallback(
    (val: LangEnum) => {
      setLang(val);
      i18n.changeLanguage(val);
    },
    [i18n]
  );

  const values = useMemo(
    () => ({
      lang,
      changeLang,
    }),
    [lang, changeLang]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
