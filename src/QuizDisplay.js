import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
  template() {
    if (!this.model.active && this.model.askedQuestions.length === 0) {
      return `
        <div>
          <p>Welcome to our Trivia Quiz</p>
          <p>Test your smarts and see how high you can score</p>
        </div>
        <button class="start">Start</button>
      `;
    } else if (
      this.model.active &&
      this.model.askedQuestions.length &&
      !this.model.askedQuestions[this.model.askedQuestions.length - 1]
        .userAnswer
    ) {
      console.log(this.model.askedQuestions);
      let question = this.model.askedQuestions[
        this.model.askedQuestions.length - 1
      ];
      console.log(question);
      let answers = question.answers;
      let options = answers
        .map((answer, index) => {
          console.log(`answer: ${answer}`);
          return `<input id="answer-${index}" type="radio" name="answer" value="${answer}">
          <label for="answer-${index}">${answer}</label>
          <br>`;
        })
        .join('');
      return `
        <div>
          <p class="question">${question.text}</p>
          <form>
            <div>
              ${options}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      `;
    } else if (
      this.model.active &&
      this.model.askedQuestions[this.model.askedQuestions.length - 1].userAnswer
    ) {
      let question = this.model.askedQuestions[
        this.model.askedQuestions.length - 1
      ];
      if (this.model.isLastCorrect) {
        this.model.isLastCorrect = false;
        return `
          <div>
            <p class="question">${question.text}</p>
            <p>You got it!</p>
            <p>The correct answer was:</p>
            <p class="correct-answer">${question.correctAnswer}</p>
          </div>
          <button class="continue">Continue</button>`;
      } else {
        return `
        <div>
          <p class="question">${question.text}</p>
          <p>Sorry, that's incorrect</p>
          <p>You answered</p>
          <p class="incorrect-answer">${question.userAnswer}</p>
          <p>The correct answer was:</p>
          <p class="correct-answer">${question.correctAnswer}</p>
        </div>
        <button class="continue">Continue</button>`;
      }
    } else if (!this.model.active && this.model.askedQuestions) {
      let newHighScore = '';
      if (Math.max(...this.model.scoreHistory) === this.model.score) {
        newHighScore = `
        <div>
          <p>That's a new High Score!</p>
        </div>
        `;
      }
      return `
      <div>
        <p>Good Job!</p>
        <p>Your final score was ${this.model.score} out of ${
  this.model.askedQuestions.length
}</P>
      </div>
      ${newHighScore}
      <div>
      <button class="playAgain">Play Again</button>
      </div>
      `;
    }
    return `
      <div>
        Quiz
      </div>
      `;
  }

  handleStart() {
    this.model.startGame();
  }

  handleContinue() {
    this.model.askQuestion();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let answer = e.target.answer.value;
    this.model.handleUserAnswer(answer);
  }

  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .continue': 'handleContinue',
      'click .playAgain': 'handleStart',
      'submit form': 'handleFormSubmit'
    };
  }
}

export default QuizDisplay;
