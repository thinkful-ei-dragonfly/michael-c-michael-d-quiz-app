const BASE_URL = 'https://opentdb.com/api.php?amount=10';

class TriviaApi {
  apiFetch() {
    let error;
    return fetch(BASE_URL)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
          if (!res.headers.get('content-type').includes('json')) {
            // error.message = res.statusText;
            // return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          // error.message = data.message;
          // return Promise.reject(error);
        }
        return data.results;
      });
  }
}

export default TriviaApi;
