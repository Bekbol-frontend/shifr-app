import { useCallback, useState, type ReactNode } from "react";
import { AppContext } from "../config";
import { LangEnum } from "@/constants";

interface IProps {
  children: ReactNode;
}

function AppContextProvider({ children }: IProps) {
  const [lang, setLang] = useState<LangEnum>(LangEnum.EN);

  const changeLang = useCallback((val: LangEnum) => {
    setLang(val);
  }, []);

  const values = {
    lang,
    changeLang,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
