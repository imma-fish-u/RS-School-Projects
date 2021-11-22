import SUtils from '../services/storageUtils.js';
import Component from './component.js';
import SettingsModal from './settingsModal.js';

class Start extends Component {
  constructor() {
    super();
    this.url = '../../views/start.html';
  }

  async afterRender() {
    const startButtons = document.querySelectorAll('.start__btn');
    const settingsOpenBtn = document.getElementById('start-settings');
    const settingsCloseBtn = document.getElementById('close-settings');

    for (let i = 0; i < startButtons.length; i += 1) {
      startButtons[i].addEventListener('click', () => { SUtils.storeGameType(i); });
    }

    const settingsModal = new SettingsModal();
    settingsOpenBtn.addEventListener('click', () => { settingsModal.setModal(); });
    settingsCloseBtn.addEventListener('click', () => { settingsModal.setModal(); });

    const progress = document.querySelectorAll('.progress');

    for (let i = 0; i < progress.length; i += 1) {
      progress[i].addEventListener('input', function () {
        const { value } = this;
        this.style.background = `linear-gradient(to right, var(--gold-dark) 0%, var(--gold-dark) ${value}%, var(--gold-light) ${value}%, var(--gold-light) 100%)`;
      });
    }
  }
}

export default Start;
