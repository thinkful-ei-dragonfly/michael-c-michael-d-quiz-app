import $ from 'jquery';
import Quiz from './Quiz';
import QuizDisplay from './QuizDisplay';
import QuizStatus from './QuizStatus';
import './main.css';

function main() {
  const q = new Quiz();
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  const quizDisplay = new QuizDisplay(q, '.display');
  const quizStatus = new QuizStatus(q, '.status');
}

$(main);
