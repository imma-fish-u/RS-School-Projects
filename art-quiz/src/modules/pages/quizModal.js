import Modal from "./modal.js";

class QuizModal extends Modal {
  constructor(answer) {
    super();

    this.modal = document.getElementById('quiz-modal');
    this.img = document.getElementById('quiz-modal-img');
    this.text = document.getElementById('quiz-modal-text');
    this.icon = document.getElementById('quiz-modal-icon');

    this.answer = answer;

    this.setModal();
    this.renderModal();
  }

  setIcon() {
    this.icon.classList.remove('uil-check-circle');
    this.icon.classList.remove('uil-times-circle');
    this.icon.classList.add(`uil-${(this.answer.isCorrect) ? 'check' : 'times'}-circle`);
  }

  setPicData() {
    // slice only author, name, year
    const picData = Object.values(this.answer.data).slice(0, 3);
    // first child is icon, so we don't add anything in it
    picData.forEach((el, i) => { this.text.children[i + 1].innerText = el; });
  }

  renderModal() {
    this.img.src = `./image-data/img/${this.answer.data.imageNum}.jpg`;
    this.setIcon();
    this.setPicData();
  }
}

export default QuizModal;
