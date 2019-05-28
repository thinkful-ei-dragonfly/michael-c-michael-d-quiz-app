class Question {

  constructor(question) {

    this.text = question.question;

    this.answers = question.incorrect_answers;
    this.correctAnswer = question.correct_answer;
    this.userAnswer = null;
  }

  randomizeAnswers() {
    let answers = this.answers;
    if (this.answers.length === 3) {
      let index = Math.floor(Math.random() * (answers.length + 1));
      answers.splice(index, 0, this.correctAnswer);
    } else {
      answers = ['True', 'False'];
    }
    return answers;
  }

  checkUserAnswer(answer) {
    this.userAnswer = answer;
    return this.userAnswer === this.correctAnswer;
  }

}

export default Question;
