import "./index.scss";
import { ICoronaItem } from "../../../api";

interface ICard {
  item: ICoronaItem;
}
const CardItem = ({ item }: ICard) => {
  return (
    <div className="card">
      <div className="card-title">
        {item?.country || item?.continent || "World"}
      </div>
      <div className="card-content">
        {item?.totalcases && (
          <p>
            Total Cases:
            <span className="card-content-value"> {item?.totalcases}</span>
          </p>
        )}
        {item?.newCases && (
          <p>
            Total New Cases:
            <span className="card-content-value"> {item?.newCases}</span>
          </p>
        )}
        {item?.totaldeaths && (
          <p>
            Total Deaths:
            <span className="card-content-value"> {item?.totaldeaths}</span>
          </p>
        )}
        {item?.newDeaths && (
          <p>
            Total New Deaths:
            <span className="card-content-value"> {item?.newDeaths}</span>
          </p>
        )}
        {item?.totalRecovered && (
          <p>
            Total Recovered:
            <span className="card-content-value"> {item?.totalRecovered}</span>
          </p>
        )}
        {item?.totalDeaths && (
          <p>
            Total Deaths:
            <span className="card-content-value"> {item?.totalDeaths}</span>
          </p>
        )}
        {item?.totalCases && (
          <p>
            Total Cases:
            <span className="card-content-value"> {item?.totalCases}</span>
          </p>
        )}
        {item?.activeCases && (
          <p>
            Active Cases:
            <span className="card-content-value"> {item?.activeCases}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
