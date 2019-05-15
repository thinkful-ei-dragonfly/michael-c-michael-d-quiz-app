class TriviaApi {

  constructor() {
    this.getQuestions = function() {

      const BASE_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';
  
      return fetch(BASE_URL)
        .then( res => {
          if (!res.ok) {
            throw new Error('request questions from server unsuccessful');
          }
          return res.json();
        })
        .catch(error => console.log(error.message));
    };
  }
}
  


export default TriviaApi;
