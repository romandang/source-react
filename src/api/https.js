const { default: httpClient } = require("./axiosClient");

export const https = {
  getAll: (url) => {
    const currentUrl = url;
    return httpClient.get(currentUrl);
  },

  GetAllWithParams: (url, params) => {
    const currentUrl = url;
    return httpClient.get(currentUrl, { params });
  },
}