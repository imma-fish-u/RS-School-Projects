export interface ISource {
    id: string;
    name: string;
}

export interface INews {
    author: string;
    title: string;
    description: string;
    source: ISource;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

export interface IDataNews {
    status: string;
    totalResults: number;
    articles: Array<INews>;
}

export interface ISources {
    id: string;
    name: string;
}

export type IDataSources = {
    status: string;
    sources: Array<ISources>;
};
