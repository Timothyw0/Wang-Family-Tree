import {
  bioChinese,
  bioEnglish,
  legendChinese,
  legendEnglish,
  navbarChinese,
  navbarEnglish,
} from "../assets/data/translations";
import { useAppSelector } from "./reduxHooks";

export const useLanguageSelector = (page: string = "") => {
  const pageMapping: any = {
    bio: [bioEnglish, bioChinese],
    legend: [legendEnglish, legendChinese],
    navbar: [navbarEnglish, navbarChinese],
  };
  const language = useAppSelector((state) => state.language.value);

  return {
    textLang: page && pageMapping[page][language === "English" ? 0 : 1],
    language,
  };
};
