import Modal from './modal.js';
import SUtils from '../services/storageUtils.js';

class FinalModal extends Modal {
  constructor(guessedPics, count, totalAmount) {
    super();

    this.modal = document.getElementById('final-modal');
    this.scoreElement = document.getElementById('final-score');

    this.guessedPics = guessedPics;
    this.count = count;
    this.totalAmount = totalAmount;

    this.setModal();
    this.renderModal();
  }

  renderModal() {
    const name = SUtils.getCategoryFromStorage();
    const score = `${this.count}/${this.totalAmount}`;
    SUtils.storeGame(name, score, this.guessedPics);

    this.scoreElement.innerHTML = score;
  }
}

export default FinalModal;
