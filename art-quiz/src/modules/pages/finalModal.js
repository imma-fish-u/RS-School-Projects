import Modal from './modal.js';
import SUtils from '../services/storageUtils.js';

class FinalModal extends Modal {
  constructor(answers, count, totalAmount) {
    super();

    this.modal = document.getElementById('final-modal');
    this.scoreElement = document.getElementById('final-score');

    this.answers = answers;
    this.count = count;
    this.totalAmount = totalAmount;

    this.setModal();
    this.renderModal();
  }

  renderModal() {
    const name = SUtils.getCategoryFromStorage();
    const score = `${this.count}/${this.totalAmount}`;
    SUtils.storeGame(name, score, this.answers);

    this.scoreElement.innerHTML = score;
  }
}

export default FinalModal;
