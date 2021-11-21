import Modal from './modal.js';

class SettingsModal extends Modal {
  constructor() {
    super();

    this.modal = document.getElementById('settings-modal');
  }
}

export default SettingsModal;
