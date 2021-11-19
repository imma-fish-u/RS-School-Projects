const RouteUtils = {

  parseRequestURL: () => {
    const url = location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request = {
      resource: null,
      id: null,
    };
    request.resource = r[0];
    request.id = r[1];

    return request;
  },

  sleep: (ms) => new Promise((resolve) => { setTimeout(resolve, ms); }),
};

export default RouteUtils;
