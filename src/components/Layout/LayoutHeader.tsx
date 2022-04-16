import { IMenuItem } from "../../api";
import Logo from "../Logo";
import Menu from "../Menu";

const LayoutHeader = () => {
  const menuItems: Array<IMenuItem> = [
    {
      name: "Main",
      path: "/",
    },
    {
      name: "Countries",
      path: "/countries",
    },
    {
      name: "Total",
      path: "/total",
    },
    {
      name: "Continents",
      path: "/continents",
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
