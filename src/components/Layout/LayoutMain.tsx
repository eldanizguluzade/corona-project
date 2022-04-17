import axios from "axios";
import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "../../consts";

import Cards from "../Cards";
import Loading from "../Loading";

const LayoutMain = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  const fetchResult = async () => {  // TODO: This Will be to useContext; 
    try {
      await axios
        .get(`${API_URL}countriesData`, {
          headers: {
            authorization: API_TOKEN,
          },
        })
        .then((res) => setResult(res.data.result));
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <main>{loading ? <Loading /> : result && <Cards data={result} />}</main>
  );
};

export default LayoutMain;
