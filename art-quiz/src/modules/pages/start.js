import SUtils from '../services/storageUtils.js';
import Component from './component.js';

class Start extends Component {
  constructor() {
    super();
    this.url = '../../views/start.html';
  }

  async afterRender() {
    const startButtons = document.querySelectorAll('.start__btn');

    for (let i = 0; i < startButtons.length; i += 1) {
      startButtons[i].addEventListener('click', () => { SUtils.storeGameType(i); });
    }
  }
}

export default Start;
