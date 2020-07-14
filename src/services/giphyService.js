import axios from "axios";
import {
  onGlobalSuccess,
  onGlobalError,
  GIPHY_API_KEY,
  API_HOST_PREFIX,
} from "./serviceHelper";

const baseUrl = API_HOST_PREFIX;
const key = GIPHY_API_KEY;

let searchGiphys = (query) => {
  const config = {
    method: "GET",
    url: baseUrl + `?api_key=${key}&q=${query}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export { searchGiphys };
