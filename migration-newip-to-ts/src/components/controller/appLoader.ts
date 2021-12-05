import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '30040946a8ac4ebb9506d1c720ac1340', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
