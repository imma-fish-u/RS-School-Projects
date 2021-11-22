import SUtils from '../services/storageUtils.js';

class Timer {
  constructor(question) {
    this.question = question;
    this.timerText = document.getElementById('quiz-time-text');
    this.timerBlock = this.timerText.parentNode;
    this.timer = '';
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  formatTime(counter) {
    return `00:${(counter < 10 ? '0' : '') + counter}`;
  }

  showTimer() {
    this.clearTimer();
    let counter = SUtils.getTimeFromStorage();
    if (!counter) {
      this.timerBlock.classList.add('hide');
      return;
    }

    let counterText = '';
    this.timer = setInterval(() => {
      counter -= 1;
      counterText = this.formatTime(counter);
      this.timerText.textContent = counterText;
      if (counter <= 0) {
        clearInterval(this.timer);
        this.question.showResult();
      }
    }, 1000);
  }
}

export default Timer;
