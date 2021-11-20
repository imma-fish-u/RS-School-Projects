import SUtils from '../services/storageUtils.js';
import CategoryName from './categoryName.js';
import Component from './component.js';

class Final extends Component {
  constructor() {
    super();

    this.url = '../../views/final.html';
  }

  setContent(scoreElement) {
    const scoreEl = scoreElement;
    const { score } = SUtils.getGameFromStorage();

    scoreEl.innerHTML = score;
  }

  async afterRender() {
    const scoreElement = document.getElementById('final-score');
    const nextGame = document.getElementById('next-game');

    this.setContent(scoreElement);

    nextGame.addEventListener('click', () => {
      const catName = new CategoryName();
      catName.nextCategory();
    });
  }
}

export default Final;
