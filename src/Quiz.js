import TriviaApi from './TriviaApi';
import Question from './Question';
import Model from './lib/Model';

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
    this.update();
  }

  _getInitQuest() {
    return this.api.getQuestions()
      .then(res => {
        console.log(res.results);
        res.results.forEach(question => {
          this.unasked.push(new Question(question));
        });
      });
  }

  _getCurrentQuestion() {
    return this.asked[0];
  }

  startQuiz() {
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.active = true;
    this._getInitQuest()
      .then(() => {
        this.nextQuestion();
      })
      .catch (error => console.log(error.message));
  }

  submitAnswer(answer) {
    const currentAnswer =  this._getCurrentQuestion();
    let answerStatus = currentAnswer.answerStatus();

    if (answerStatus !== -1) {
      throw new Error('Cannot answer question more than once');
    }
    currentAnswer.handleAnswer(answer);
    answerStatus = currentAnswer.answerStatus();
    if (answerStatus === 1) {
      this.score++;
    }
    this.update();

    return answerStatus === 1;

  }

  nextQuestion() {
    const currentQuestion = this._getCurrentQuestion();
    if (currentQuestion && currentQuestion.userAnswer === undefined) {
      throw new Error('You must answer the question before you continue');

    }
    if (this.unasked.length === 0) {
      this.active = false;
      this.scoreHistory.unshift(this.score);
      this.update();
      return null;
    }
    this.asked.unshift(this.unasked.pop());
    this.update();
    return this.asked[0];
  }
}

export default Quiz;