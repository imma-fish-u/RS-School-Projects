class Modal {
  constructor() {
    this.modal = '';
    this.background = document.getElementById('dark-filter');
  }

  setModal() {
    this.modal.classList.toggle('show');
    if (this.background) this.background.classList.toggle('active');
  }
}

export default Modal;
