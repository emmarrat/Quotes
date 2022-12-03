export interface Categories {
  name: string;
  id: string;
}

export interface SingleQuote {
  author: string;
  category: string;
  text: string;
}

export interface QuotesType {
  author: string;
  category: string;
  text: string;
  id: string;
}

export interface QuotesApi {
  [id: string]: Quotes;
}