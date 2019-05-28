import Question from './Question';
import Model from './lib/Model';
import TriviaApi from './TriviaApi';

class Quiz extends Model {
  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.askedQuestions = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
    this.isLastCorrect = false;

    // TASK: Add more props here per the exercise
  }

  askQuestion() {
    if (this.unasked.length) {
      this.askedQuestions.push(this.unasked.pop());
      this.update();
    } else {
      this.active = false;
      this.scoreHistory.push(this.score);
      this.update();
    }
  }

  // Example method:
  startGame() {
    this.score = 0;
    this.unasked = [];
    this.askedQuestions = [];
    this.active = true;
    let game = new TriviaApi();
    console.log('Start quiz');
    game
      .apiFetch()
      .then(res => {
        this.unasked = [];
        for (let i = res.length - 1; i >= 0; i--) {
          let newQuestion = new Question(res[i]);
          let answers = newQuestion.randomizeAnswers();
          newQuestion.answers = answers;
          this.unasked.push(newQuestion);
          // console.log(answers);
          // console.log(newQuestion.correctAnswer);
          // console.log(newQuestion.checkUserAnswer(answers[1]));
          // console.log(`Score: ${this.score}`);
        }
        this.askQuestion();
        this.update();
      })
      .catch(err => console.log(err.message));
  }

  handleUserAnswer(answer) {
    if (
      this.askedQuestions[this.askedQuestions.length - 1].checkUserAnswer(
        answer
      )
    ) {
      this.updateScore();
      this.isLastCorrect = true;
    }
    this.update();
  }

  updateScore() {
    this.score = this.score + 1;
  }

  endGame() {
    this.active = false;
    this.scoreHistory.push(this.score);
  }
}

export default Quiz;
