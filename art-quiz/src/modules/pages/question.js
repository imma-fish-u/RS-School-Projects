import SUtils from '../services/storageUtils.js';
import QuizModal from './quizModal.js';

class Question {
  constructor(answers) {
    this.correctNumElement = document.querySelector('.quiz__navbar-answers-correct');
    this.quizImg = document.getElementById('quiz__img');
    this.pagination = document.querySelector('.quiz__pagination');
    this.answerElements = document.querySelectorAll('.quiz__btn');

    this.answers = answers;
    this.totalAmount = 10;
    this.answeredAmount = 0;
    this.correctAmount = 0;

    this.quizModal = {};
    this.final = {};
  }

  async renderQuestion() {
    const answer = this.answers[this.answeredAmount];
    const answers = await answer.getAnswers();

    this.quizImg.src = `./image-data/img/${answer.data.imageNum}.jpg`;
    for (let i = 0; i < this.answerElements.length; i += 1) {
      this.answerElements[i].innerHTML = `<input type="radio" name="radio"><span class="checkmark">${answers[i]}</span>`;
    }
  }

  nextQuestion() {
    const { isCorrect } = this.answers[this.answeredAmount];
    const dotColor = (isCorrect) ? 'right' : 'wrong';
    this.pagination.children[this.answeredAmount].classList.replace('active', dotColor);

    this.answeredAmount += 1;
    if (this.answeredAmount < this.totalAmount) {
      this.renderQuestion();
      this.pagination.children[this.answeredAmount].classList.add('active');
    } else {
      this.endQuiz();
    }

    if (Object.keys(this.quizModal).length !== 0) {
      this.quizModal.setModal();
    }
  }

  showResult(answerEl) {
    const answer = this.answers[this.answeredAmount];
    answer.isAnswerCorrect(answerEl);

    this.quizModal = new QuizModal(answer);

    if (answer.isCorrect) {
      this.correctAmount += 1;
      this.correctNumElement.innerText = this.correctAmount;
    }
  }

  storeResults() {
    const name = SUtils.getCategoryFromStorage();
    const score = `${this.correctAmount}/${this.totalAmount}`;
    SUtils.storeGame(name, score, this.answers);
  }

  endQuiz() {
    this.storeResults();
    window.location.hash = '#final';
  }
}

export default Question;
