class Modal {
  constructor() {
    this.background = document.getElementById('dark-filter');
  }

  setModal() {
    this.modal.classList.toggle('show');
    this.background.classList.toggle('active');
  }
}

export default Modal;
