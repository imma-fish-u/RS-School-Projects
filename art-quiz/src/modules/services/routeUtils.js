const RouteUtils = {

  parseRequestURL: () => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const request = url.split('/');

    return request;
  },

  sleep: (ms) => new Promise((resolve) => { setTimeout(resolve, ms); }),
};

export default RouteUtils;
