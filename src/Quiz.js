

import Question from './Question';
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
  prepareQuiz() {
    this.api.getQuestions()
      .then((res) => {
        res['results'].forEach(elem => {
          this.unasked.push(elem);
        });
      });
      console.log(this.unasked.length);
  }
}

export default Quiz;

//next question method in quiz moves question from unasked to asked
//submit answer method takes current question and change the userAnswer property to what they submit