import { IDataNews, IDataSources } from '../interface/IApi';
import News from './news/news';
import Sources from './sources/sources';
import Alphabet from './sources/alphabet';

export class AppView {
    private news: News;

    private sources: Sources;

    private alphabet: Alphabet;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.alphabet = new Alphabet();
    }

    drawNews(data: IDataNews): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    drawAlphabet() {
        this.alphabet.createAlphabet();
    }
}

export default AppView;
