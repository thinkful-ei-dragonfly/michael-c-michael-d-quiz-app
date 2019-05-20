import Model from './lib/Model';
import { decodeHTML } from './lib/util';

class Question extends Model{
  constructor(question) {
    super();
    this.answers = [question.correct_answer, ...question.incorrect_answers] ;
    this.text = question.question;
    this.correctAnswer = question.correct_answer;
    this.userAnswer = null;
  }

  //Methods
  answerStatus() {
    if (this.userAnswer === null) {
      return -1;
    }
    else if (this.userAnswer === this.correctAnswer) {
      return 1;
    }
    else {
      return 0;
    }
  }

  handleAnswer(answer) {
    this.userAnswer = decodeHTML(answer);
  }
}

export default Question;