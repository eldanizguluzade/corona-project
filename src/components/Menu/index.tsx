import "./index.scss";
import { IMenuItem } from "../../api";

interface IItems {
  items: Array<IMenuItem>;
}

const Menu = ({ items }: IItems) => {

  const isActive = (path: string) => {
    const currentPath = window.location.pathname;
    return currentPath === path ? "active" : "";
  };

  return (
    <nav>
      <ul className="menu">
        {items?.map((item: IMenuItem, index) => (
          <li className={"menu-item " + isActive(item.path)} key={index}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
