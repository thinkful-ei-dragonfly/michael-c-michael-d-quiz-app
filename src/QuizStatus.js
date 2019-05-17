import Renderer from './lib/Renderer';

class QuizStatus extends Renderer {
  template() {
    // return some HTML here, utilizing `this.model`

    return `
      <div>
      <h1> Quiz Status </h1>
      </div>
    `;
  }
}

export default QuizStatus;