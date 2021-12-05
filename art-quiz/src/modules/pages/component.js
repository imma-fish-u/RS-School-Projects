class Component {
  constructor() {
    this.url = '';
  }

  async render() {
    const response = await fetch(this.url);
    const data = await response.text();
    return data;
  }
}

export default Component;
