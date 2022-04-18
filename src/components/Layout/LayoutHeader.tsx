import { IMenuItem } from "../../api";
import { CONTINENT_PATH, COUNTRIES_PATH, MAIN_PATH, TOTAL_PATH } from "../../routes";

import Logo from "../Logo";
import Menu from "../Menu";

const LayoutHeader = () => {
  const menuItems: Array<IMenuItem> = [
    {
      name: "Main",
      path: MAIN_PATH,
    },
    {
      name: "Countries",
      path: COUNTRIES_PATH,
    },
    {
      name: "Continents",
      path: CONTINENT_PATH,
    },
    {
      name: "Total",
      path:  TOTAL_PATH,
    }
  ];

  return (
    <header>
      <Logo title="Corona App" img="logo.png" alt="Corona" path="/"/>
      <Menu items={menuItems} />
    </header>
  );
};

export default LayoutHeader;
