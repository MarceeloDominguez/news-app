export interface News {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source?: Source;
  author: string;
  title: string;
  description: null;
  url: string;
  urlToImage: null | string;
  publishedAt: Date;
  content: null;
}

export interface Source {
  id: ID;
  name: Name;
}

export enum ID {
  GoogleNews = "google-news",
}

export enum Name {
  GoogleNews = "Google News",
}
