import { LangEnum } from "@/constants";

export interface IContext {
  lang: LangEnum;
  changeLang: (val: LangEnum) => void;
}
