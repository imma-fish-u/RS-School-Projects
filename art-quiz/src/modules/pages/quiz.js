import Answer from './answer.js';
import Question from './question.js';
import SUtils from '../services/storageUtils.js';
import Timer from '../services/timer.js';
import Component from './component.js';

class Quiz extends Component {
  constructor() {
    super();
    this.categoryType = SUtils.getCategoryFromStorage();
    this.gameType = SUtils.getGameTypeFromStorage();

    this.body = document.querySelector('body');
    this.body.style.overflow = 'hidden';

    this.totalAmount = 10;

    this.timer = {};

    this.url = (this.gameType) ? './views/quiz.html' : './views/quiz.html';
    this.imgDataArr = []; // здесь лежат 10 объектов полученных из json файла
  }

  setPagination(paginationElement) {
    for (let i = 0; i < this.totalAmount; i += 1) {
      const dot = document.createElement('div');
      dot.className = 'quiz__dot';
      paginationElement.appendChild(dot);
    }

    paginationElement.children[0].classList.add('active');
  }

  async startQuiz() {
    try {
      const url = './image-data/images.json';
      const res = await fetch(url);
      const data = await res.json();

      const arr = data.images.filter((el) => el.category === this.categoryType).slice(0, 10);
      return arr;
    } catch (error) {
      alert(error);
      return 1;
    }
  }

  async afterRender() {
    const answerElements = document.querySelectorAll('.quiz__btn');
    const paginationElement = document.querySelector('.quiz__pagination');
    const nextBtn = document.getElementById('quiz-next-btn');
    const quitBtn = document.getElementById('quit-game');
    this.setPagination(paginationElement);

    this.imgDataArr = await this.startQuiz();
    const answers = this.imgDataArr.map((el) => new Answer(el));
    const question = new Question(answers);

    this.timer = new Timer(question);
    this.timer.showTimer();

    for (let i = 0; i <= answerElements.length - 1; i += 1) {
      const btn = answerElements[i];
      btn.addEventListener('click', () => {
        if (btn.firstChild.checked) {
          question.showResult(btn);
          this.timer.clearTimer();
        }
      });
    }

    nextBtn.addEventListener('click', () => {
      this.timer.showTimer();
      question.nextQuestion();
    });

    quitBtn.addEventListener('click', () => {
      this.timer.clearTimer();
      this.body.style.overflow = '';
    });

    await question.renderQuestion();
  }
}

export default Quiz;
