import axios from "axios";
import { API_URL, API_TOKEN } from "../consts";

export interface IMenuItem {
  name: string;
  path: string;
}

export interface ICoronaItem {
  country?: string;
  totalcases?: string;
  newCases?: string;
  totaldeaths?: string;
  newDeaths?: string;
  totalRecovered?: string;
  activeCases?: string;
}

export interface IContext {
  result: Array<ICoronaItem>;
  setResult: any;
  loading: boolean;
  setLoading: any;
}

const endpoints = {
  head: {
    getCountry(): string {
      return `${API_URL}countriesData`;
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
};
