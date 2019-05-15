

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
        let holder = [];
        console.log(this);
        res['results'].forEach(function(elem) {
          holder.push(elem);
        });
        console.log(holder);
        this.unasked = holder;
        // let question1 = new Question(res.results[0]);
        // console.log(question1);
      });
  }
}

export default Quiz;

//next question method in quiz moves question from unasked to asked
//submit answer method takes current question and change the userAnswer property to what they submit