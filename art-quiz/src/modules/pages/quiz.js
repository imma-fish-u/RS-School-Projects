import Answer from './answer.js';
import Question from './question.js';
import SUtils from '../services/storageUtils.js';

class Quiz {
  constructor() {
    this.categoryType = SUtils.getCategoryFromStorage();
    this.gameType = SUtils.getGameTypeFromStorage();

    this.totalAmount = 10;

    this.url = (this.gameType) ? '../../views/quiz.html' : '../../views/quiz.html';
    this.imgDataArr = []; // здесь лежат 10 объектов полученных из json файла
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

  async render() {
    const response = await fetch(this.url);
    const data = await response.text();

    this.imgDataArr = await this.startQuiz();

    return data;
  }

  async afterRender() {
    const answerElements = document.querySelectorAll('.quiz__btn');
    const paginationElement = document.querySelector('.quiz__pagination');

    this.setPagination(paginationElement);

    const answers = this.imgDataArr.map((el) => new Answer(el));
    const question = new Question(answers);

    for (let i = 0; i <= answerElements.length - 1; i += 1) {
      const btn = answerElements[i];
      btn.addEventListener('click', () => {
        if (btn.firstChild.checked) {
          question.showResult(btn);
        }
      });
    }

    await question.renderQuestion();
  }

  setPagination(paginationElement) {
    for (let i = 0; i < this.totalAmount; i += 1) {
      const dot = document.createElement('div');
      dot.className = 'quiz__dot';
      paginationElement.appendChild(dot);
    }

    paginationElement.children[0].classList.add('active');
  }
}

export default Quiz;
