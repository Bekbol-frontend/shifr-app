import { AppContext, type IContext } from "@/app/Provider/AppContextProvider";
import { useContext } from "react";

export const useAppContext = (): IContext => {
  return useContext(AppContext);
};
