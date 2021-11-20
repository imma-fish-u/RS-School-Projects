class StorageUtils {
  static storeGame(...args) {
    const category = {
      name: args[0],
      score: args[1],
      guessedPics: args[2],
    };

    localStorage.setItem(`${category.name}`, JSON.stringify(category));
  }

  static getGameFromStorage(catName) {
    return JSON.parse(localStorage.getItem(catName));
  }

  static storeCategory(categoryType) {
    localStorage.setItem('category', categoryType);
  }

  static getCategoryFromStorage() {
    return localStorage.getItem('category') || 'portrait';
  }

  static storeGameType(gameType) {
    localStorage.setItem('gameType', gameType);
  }

  static getGameTypeFromStorage() {
    return localStorage.getItem('gameType') || '0';
  }
}

export default StorageUtils;
