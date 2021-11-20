import SUtils from "../services/storageUtils";

class CategoryName {
  constructor() {
    this.arr = ['portrait', 'landscape', 'marine', 'impressionism', 'expressionism', 'avant-garde', 'renaissance', 'surrealism', 'realism', 'romaticism'];
  }

  nextCategory() {
    const cat = SUtils.getCategoryFromStorage();
    const newCatIndex = this.arr.indexOf(cat) + 1;
    if (newCatIndex < this.arr.length) {
      SUtils.storeCategory(this.arr[newCatIndex]);
    } else {
      SUtils.storeCategory(this.arr[0]);
    }
  }
}

export default CategoryName;
