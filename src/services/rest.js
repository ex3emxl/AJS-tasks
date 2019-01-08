const baseUrl = 'http://localhost:8086/';

const request = (url, options = {}, data) => {
  const settings = {
    credentials: 'include',
    ...options
  };
  if (data) {
    settings.headers = {
      'Content-type': 'application/json; charset=utf-8'
    };
    settings.body = JSON.stringify(data);
  }
  return fetch(`${baseUrl}${url}`, settings)
    .then(data => data.json())
    .then((data) => {
      if(data.error){
        throw data.error;
      }
      return data;
    })
};

const rest = {
  get(url) {
    return request(url)
  },

  post(url, data) {
    return request(url, {method: 'POST'}, data)
  },
};


export {rest, request}
