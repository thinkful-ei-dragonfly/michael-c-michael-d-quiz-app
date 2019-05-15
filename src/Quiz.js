import TriviaApi from './TriviaApi';
import Question from './Question';
import Model from './lib/Model';

class Quiz extends Model {


  constructor() {
    super();
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
    this.api = new TriviaApi();
  }


  startQuiz() {
    this.active = true;
    this.api.getQuestions()
      .then(res => {
        console.log(res);
        return res;
      })
      .then(res => {
        res.results.forEach(question => {
          this.unasked.push(new Question(question));
        });
      });

  }
}

// submitAnswer(choice) {
//   //sumbit choice
// }

export default Quiz;