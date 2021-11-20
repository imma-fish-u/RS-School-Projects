import SUtils from '../services/storageUtils.js';
import Score from './score.js';
import Component from './component.js'

class Category extends Component {
  constructor() {
    super();

    this.categories = '';
    this.categoriesItem = '';
    this.categoriesScore = '';

    this.score = {};

    this.url = '../../views/category.html';
  }

  showPlayedCategories() {
    for (let i = 0; i < this.categories.length; i += 1) {
      const data = SUtils.getGameFromStorage(this.categories[i].id);
      if (data) {
        this.categoriesScore[i].innerText = data.score;
        this.categoriesItem[i].classList.add('active');
        this.categories[i].classList.remove('grey-filter');
      }
    }
  }

  async afterRender() {
    this.categories = document.querySelectorAll('.category__pic');
    this.categoriesItem = document.querySelectorAll('.category__item');
    this.categoriesScore = document.querySelectorAll('.category__description-score');

    this.showPlayedCategories();

    for (let i = 0; i < this.categories.length; i += 1) {
      const categoryType = this.categories[i].id;
      const categoriesScoreBtn = this.categoriesScore[i].parentNode;
      this.categories[i].addEventListener('click', () => { SUtils.storeCategory(categoryType); });
      categoriesScoreBtn.addEventListener('click', () => { SUtils.storeCategory(categoryType); });
    }
  }
}

export default Category;
