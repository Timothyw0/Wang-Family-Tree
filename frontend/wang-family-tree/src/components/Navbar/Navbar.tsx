import React, { memo } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { changeLanguage } from "../../store/languageSlice";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";
import { useAppDispatch } from "../../hooks/reduxHooks";

const Navbar = () => {
  const textLang = useLanguageSelector("navbar");
  const dispatch = useAppDispatch();

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <span className="lg:text-3xl sm:text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white">
            {textLang.title}
          </span>
        </div>
        <div className="lg:flex flex-grow items-center sm:hidden">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="flex items-center lg:text-base sm:text-sm uppercase font-bold leading-snug">
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {textLang.switchLanguage}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => dispatch(changeLanguage("English"))}
                    >
                      English
                    </MenuItem>
                    <MenuItem
                      onClick={() => dispatch(changeLanguage("Chinese"))}
                    >
                      中文
                    </MenuItem>
                  </MenuList>
                </Menu>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
