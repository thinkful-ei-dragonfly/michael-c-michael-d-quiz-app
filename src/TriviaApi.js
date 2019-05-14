class TriviaApi {
  constructor(n) {
    this.BASE_URL = `https://opentdb.com/api.php?amount=${n}`;
  }
  getQuestions() {
    return fetch(this.BASE_URL)
      .then(res => res.json());
  }
}

export default TriviaApi;
