import Component from "./component.js";
import SUtils from '../services/storageUtils.js';

class Score extends Component {
  constructor() {
    super();
    this.scoreContainer = '';

    this.categoryType = SUtils.getCategoryFromStorage();

    this.url = './views/score.html';
  }

  getResults() {
    return SUtils.getGameFromStorage(this.categoryType);
  }

  createImg(guessedPic) {
    const {
      author,
      name,
      year,
      imageNum,
    } = guessedPic.data;

    const div = document.createElement('div');
    if (guessedPic.isCorrect) {
      div.className = 'score__pic';
    } else {
      div.className = 'score__pic grey-filter';
    }
    div.innerHTML = `<i class="uit uit-star"></i>
                    <div class="score__text">
                      <p class="score__text-author">${author}</p>
                      <p>${name}, ${year}</p>
                    </div>`;
    div.style = `background-image: url(./image-data/img/${imageNum}.jpg);`;
    return div;
  }

  createAnswersGrid(guessedPics) {
    for (let i = 0; i < guessedPics.length; i += 1) {
      this.scoreContainer.append(this.createImg(guessedPics[i]));
    }
  }

  async afterRender() {
    const navbarScore = document.getElementById('navbar-score');
    this.scoreContainer = document.getElementById('score-container');

    const { score, guessedPics } = this.getResults();
    navbarScore.innerText = score;
    this.createAnswersGrid(guessedPics);
  }
}

export default Score;
