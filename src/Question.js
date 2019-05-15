import TriviaApi from './TriviaApi';

class Question {
  constructor(questionData) {
    this.text = questionData['question'];
    this.answers = questionData['incorrect_answers'];
    this.answers.push(questionData['correct_answer']);
    this.correctAnswer = questionData['correct_answer'];
    this.userAnswer = null;
  }
  
}


export default Question;

