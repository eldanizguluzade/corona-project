import "./index.scss";
import { ICoronaItem } from "../../api";

import Card from "./Card";

interface ICards {
  data: Array<ICoronaItem>;
}


const Cards = ({ data }: ICards) => {
  return (
    <div className="cards">
      {data?.map((item: ICoronaItem, index) => (
        <Card item={item} key={index}/>
      ))}
    </div>
  );
}

export default Cards;
