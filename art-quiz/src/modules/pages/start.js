import SUtils from '../services/storageUtils.js';

class Start {
  constructor() {
    this.url = '../../views/start.html';
  }

  async render() {
    const response = await fetch(this.url);
    const data = await response.text();
    return data;
  }

  async afterRender() {
    //  const categoryElement = document.getElementById('category');
    const startButtons = document.querySelectorAll('.start__btn');

    for (let i = 0; i < startButtons.length; i += 1) {
      startButtons[i].addEventListener('click', () => { SUtils.storeGameType(i); });
    }
  }
}

export default Start;
