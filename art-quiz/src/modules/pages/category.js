class Category {
  constructor() {
    this.url = '../../views/category.html';
  }

  async render() {
    const response = await fetch(this.url);
    const data = await response.text();
    return data;
  }

  async afterRender() {
    const categories = document.querySelectorAll('.category__pic');

    for (let i = 0; i < categories.length; i += 1) {
      const categoryType = categories[i].id;
      categories[i].addEventListener('click', () => { localStorage.setItem('category', categoryType); });
    }
  }
}

export default Category;
