import {
  bioChinese,
  bioEnglish,
  navbarChinese,
  navbarEnglish,
} from "../assets/data/translations";
import { useAppSelector } from "./reduxHooks";

export const useLanguageSelector = (page: string = "") => {
  const pageMapping: any = {
    navbar: [navbarEnglish, navbarChinese],
    bio: [bioEnglish, bioChinese],
  };
  const language = useAppSelector((state) => state.language.value);

  return {
    textLang: page && pageMapping[page][language === "English" ? 0 : 1],
    language,
  };
};
