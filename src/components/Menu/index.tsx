import "./index.scss";
interface IMenuItem {
  name: string;
  path: string;
}

const Menu = (props: Array<IMenuItem>) => {
  return (
    <nav>
      <ul>
        {props?.map((item: IMenuItem) => (
          <li>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
