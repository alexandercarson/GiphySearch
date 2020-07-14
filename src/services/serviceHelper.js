const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;

const onGlobalSuccess = (response) => {
  return response.data;
};

const onGlobalError = (err) => {
  return Promise.reject(err);
};

export { onGlobalError, onGlobalSuccess, GIPHY_API_KEY, API_HOST_PREFIX };
