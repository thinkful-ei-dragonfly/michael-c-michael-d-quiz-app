import TriviaApi from './TriviaApi';
import Question from './Question';
import Model from './lib/Model';

/* Flow
  q.startQuiz()
  q.unasked[0] is the first unasked question in array
  q.submitAnswer('<answer>') submit answer to unasked[0]
  q.nextQuestion() unasked[0] ==> asked[0] | unasked.length = 4
  */

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
    this.api = new TriviaApi(Quiz.DEFAULT_QUIZ_LENGTH);
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

  submitAnswer(answer) {
    if (this.unasked[0].correctAnswer === answer) {
      this.userAnswer = answer;
      this.score++;
    } else {
      this.userAnswer = answer;
    }
  }

  answerStatus() {
    if (this.userAnswer === null) {
      return -1;
    }
    else if (this.userAnswer !== this.unasked[0].correctAnswer) {
      return 0;
    }
    else if (this.userAnswer === this.unasked[0].correctAnswer) {
      return 1;
    }
  }

  nextQuestion() {
    if (this.unasked.length > 0) {
      this.userAnswer = null;
      const quest = this.unasked[0];
      this.asked.push(quest);
      this.unasked = this.unasked.slice(1);
    } else {
      throw new Error('No More Questions remaining');
    }
  }

}

export default Quiz;