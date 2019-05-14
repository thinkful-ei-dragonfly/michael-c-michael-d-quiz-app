import TriviaApi from './TriviaApi';

class Quiz {
  constructor() {
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
    this.api = new TriviaApi(5);
  }
  startQuiz() {
      this.api.getQuestions()
        .then(res => console.log(res))
  }
}

/* const setUnasked {

}

const setAsked {

}

const scoreFunction {
    // keeps track of Quiz.score:
    // updates Quiz.store:
}

const scoreHistoryFunction {

}

const setActive {
    //
} */
export default Quiz;