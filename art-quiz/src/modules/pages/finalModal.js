import Modal from "./modal.js";

class FinalModal extends Modal {
  constructor(count, totalAmount) {
    super();

    this.modal = document.getElementById('final-modal');
    this.scoreElement = document.getElementById('final-score');

    this.count = count;
    this.totalAmount = totalAmount;

    this.setModal();
    this.renderModal();
  }

  renderModal() {
    this.scoreElement.innerHTML = `${this.count}/${this.totalAmount}`;
  }
}

export default FinalModal;
