class Answer {
  constructor(imgData) {
    this.data = imgData;
    this.correctAnswer = imgData.author;
    this.isCorrect = false;
  }

  async getAnswers() {
    return this.shuffleAnswers(await this.setAnswers());
  }

  getRandomIndex(num) {
    return Math.floor(Math.random() * num);
  }

  async setAnswers() {
    const url = './image-data/images.json';
    const res = await fetch(url);
    const data = await res.json();

    const incorrectAnswersNum = 3;
    const incorrectAnswers = [];
    incorrectAnswers.push(this.correctAnswer);
    let i = 0;
    while (i < incorrectAnswersNum) {
      const index = this.getRandomIndex(data.images.length);
      const incAnswer = data.images[index].author;
      if (incAnswer !== this.correctAnswer) {
        incorrectAnswers.push(incAnswer);
        i += 1;
      }
    }
    return incorrectAnswers;
  }

  shuffleAnswers(answers) {
    const arr = answers;
    for (let i = answers.length - 1; i > 0; i -= 1) {
      const j = this.getRandomIndex(i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  isAnswerCorrect(checkedElement) {
    if (checkedElement) {
      const authorEl = checkedElement.childNodes[1];
      this.isCorrect = (authorEl.textContent === this.correctAnswer);
    } else {
      this.isCorrect = false;
    }
  }
}

export default Answer;
