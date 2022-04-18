import { useContext, useEffect } from "react";
import { fetchResult, IResult, IContext, ICoronaItem } from "../../api";
import { CURRENT_PATH } from "../../consts";
import { Context } from "../../context";
import { CONTINENT_PATH, COUNTRIES_PATH, TOTAL_PATH } from "../../routes";

import Cards from "../Cards";
import Loading from "../Loading";

const ShowCards = (result?: any) => {
  return (
    <>
      {result ? (
        Object.keys(result).map(
          (item, index) =>
            result[item] && <Cards data={result[item]} key={index} />
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

const LayoutMain = () => {
  const { result, setResult }: Partial<IContext> = useContext(Context);

  const switchPath = () => {
    switch (CURRENT_PATH) {
      case COUNTRIES_PATH:
        fetchResult.fetchCountry().then((res) => {
          setResult({ countries: res });
        });
        break;
      case CONTINENT_PATH:
        fetchResult.fetchContinent().then((res) => {
          setResult({ continent: res });
        });
        break;
      case TOTAL_PATH:
        fetchResult.fetchTotal().then((res) => {
          setResult({ total: [res] });
        });
        break;
    }
  };
  useEffect(() => {
    switchPath();
  }, []);

  return <main>{ShowCards(result)}</main>;
};

export default LayoutMain;
