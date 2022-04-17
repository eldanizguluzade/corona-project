import { useContext, useEffect } from "react";
import { fetchResult, IContext } from "../../api";
import { Context, ContextProvider } from "../../context";

import Cards from "../Cards";
import Loading from "../Loading";

const LayoutMain = () => {
  const { result, setResult, loading, setLoading }: Partial<IContext> =
    useContext(Context);

  useEffect(() => {
    fetchResult.fetchCountry().then((res) => {
      setResult(res);
      setLoading(false);
    });
  }, []);

  return (
    <main>{loading ? <Loading /> : result && <Cards data={result} />}</main>
  );
};

export default LayoutMain;
