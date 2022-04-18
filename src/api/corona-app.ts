import axios from "axios";
import {
  API_URL,
  API_TOKEN,
  COUNTRIES_DATA,
  CONINENT_DATA,
  TOTAL_DATA,
} from "../consts";

export interface IMenuItem {
  name: string;
  path: string;
}

export interface ICoronaItem {
  country?: string;
  continent?:string;
  totalcases?: string;
  newCases?: string;
  totaldeaths?: string;
  newDeaths?: string;
  totalRecovered?: string;
  totalDeaths?:string;
  totalCases?:string;
  activeCases?: string;
}

export interface IResult{
  countries?: Array<ICoronaItem>;
  continent?: Array<ICoronaItem>;
  total?: Array<ICoronaItem>;
}
export interface IContext {
  result: IResult;
  setResult: any;
}

const endpoints = {
  head: {
    getCountry(): string {
      return `${API_URL}${COUNTRIES_DATA}`;
    },
    getContinent(): string {
      return `${API_URL}${CONINENT_DATA}`;
    },
    getTotal(): string {
      return `${API_URL}${TOTAL_DATA}`;
    },
  },
};

export const fetchResult = {
  /** Fetch Country */
  fetchCountry: async () =>
    await axios
      .get(endpoints.head.getCountry(), {
        headers: { authorization: API_TOKEN },
      })
      .then((res) => res.data.result),
  /** Fetch Continents */
  fetchContinent: async () =>
    await axios
      .get(endpoints.head.getContinent(), {
        headers: { authorization: API_TOKEN },
      })
      .then((res) => res.data.result),
  /** Fetch Total */
  fetchTotal: async () =>
    await axios
      .get(endpoints.head.getTotal(), {
        headers: { authorization: API_TOKEN },
      })
      .then((res) => res.data.result),
};
