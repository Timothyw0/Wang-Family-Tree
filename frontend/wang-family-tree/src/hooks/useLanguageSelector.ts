import { navbarChinese, navbarEnglish } from "../assets/data/translations";
import { useAppSelector } from "./reduxHooks";

export const useLanguageSelector = (page: string) => {
  const pageMapping: any = {
    navbar: [navbarEnglish, navbarChinese],
  };
  const language = useAppSelector((state) => state.language.value);

  return pageMapping[page][language === "English" ? 0 : 1];
};
