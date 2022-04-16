import "./index.scss";
import { IMenuItem } from "../../api";

interface IItems {
  items: Array<IMenuItem>;
}

const Menu = ({ items }: IItems) => {
  return (
    <nav>
      <ul className="menu">
        {items?.map((item: IMenuItem, index) => (
          <li className="menu-item" key={index}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
