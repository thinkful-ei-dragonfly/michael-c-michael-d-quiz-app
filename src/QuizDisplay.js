import $ from 'jquery';
import Renderer from './lib/Renderer';


class QuizDisplay extends Renderer {


  getEvents() {
    return {
      'click .start-quiz': 'handleStart',
      'submit .asnwer-form': 'handleSubmit',
    };
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
        <p>
          Test your smarts and see how high you can score!
        </p>
      </div>
      <div class="buttons">
        <button class="start-quiz">Start Quiz</button>
      </div>
    `;
  }

  _generateQuestionDisplay() {
    const currentQuestion = this.model._getCurrentQuestion();
    const currentAnswers = currentQuestion.answers.map(ans => {
      return `<input type="radio" name="answer"> ${ans}`;
    }).join('');
    
    return `
    <form class="answer-form"> <h3> Answer the following question </h3>
    <p>${currentQuestion.text}</p> 
    ${currentAnswers} <br>
    <input type="submit" class="submit">
    </form>`;
  }


  template() {
    let html = '';

    if (this.model.asked.length === 0) {
      // Quiz has not started
      html = this._generateIntro();
    } if (this.model.asked.length > 0) {
      html = this._generateQuestionDisplay();
    }

    return html;
  }

  handleStart() {
    this.model.startQuiz();
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.answer.value;

  }
}


export default QuizDisplay;
