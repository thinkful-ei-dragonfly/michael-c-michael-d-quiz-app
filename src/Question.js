import Model from './lib/Model';

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
    else if (this.userAnswer !== this.unasked[0].correctAnswer) {
      return 0;
    }
    else if (this.userAnswer === this.unasked[0].correctAnswer) {
      return 1;
    }
  }
}

export default Question;