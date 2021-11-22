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
    return JSON.parse(localStorage.getItem(catName || this.getCategoryFromStorage()));
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

  static storeTime(time) {
    localStorage.setItem('time', time);
  }

  static getTimeFromStorage() {
    return localStorage.getItem('time');
  }

  static storeMusic(music) {
    localStorage.setItem('music', music);
  }

  static getMusicFromStorage() {
    return localStorage.getItem('music');
  }

  static deleteFromStorage(el) {
    localStorage.removeItem(el);
  }
}

export default StorageUtils;
