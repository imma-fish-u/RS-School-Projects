import SUtils from '../services/storageUtils.js';
import Modal from './modal.js';

class SettingsModal extends Modal {
  constructor() {
    super();

    this.modal = document.getElementById('settings-modal');
    this.switches = document.querySelectorAll('.settings__switch');
    this.selectEl = document.getElementById('timer-select');
    this.progressEl = document.getElementById('progress-music');

    this.render();
  }

  renderItem(data, i, domElValue) {
    if (data) {
      domElValue.value = data;
      this.switches[i].firstElementChild.checked = true;
      this.switches[i].classList.toggle('active');
    }
  }

  getSettingsData() {
    const time = SUtils.getTimeFromStorage();
    const music = SUtils.getMusicFromStorage();

    this.renderItem(time, 0, this.selectEl);
    this.renderItem(music, 1, this.progressEl);
  }

  setSettingsData() {
    if (this.switches[0].firstElementChild.checked) {
      SUtils.storeTime(this.selectEl.value);
    } else {
      SUtils.deleteFromStorage('time');
    }
    if (this.switches[1].firstElementChild.checked) {
      SUtils.storeMusic(this.progressEl.value);
    } else {
      SUtils.deleteFromStorage('music');
    }
  }

  render() {
    this.getSettingsData();

    for (let i = 0; i < this.switches.length; i += 1) {
      this.switches[i].addEventListener('click', () => {
        this.setSettingsData();
        this.switches[i].classList.toggle('active');
      });
    }

    this.selectEl.addEventListener('change', () => { this.setSettingsData(); });
    this.progressEl.addEventListener('change', () => { this.setSettingsData(); });
  }
}

export default SettingsModal;
