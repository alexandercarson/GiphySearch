const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;

console.log("host", API_HOST_PREFIX);
console.log("api key", GIPHY_API_KEY);

const onGlobalSuccess = (response) => {
  return response.data;
};

const onGlobalError = (err) => {
  return Promise.reject(err);
};

export { onGlobalError, onGlobalSuccess, GIPHY_API_KEY, API_HOST_PREFIX };
