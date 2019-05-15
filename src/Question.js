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
  submitAnswer(answer) {
    this.submittedAnswer = answer;
  }
}

export default Question;