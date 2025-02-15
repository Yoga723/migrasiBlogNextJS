export interface BlogArticleProps {
  id: string;
  title: string;
  thumbnail: string;
  metaData: string;
  keywords: string;
  cta?: string;
  cardsDescription?: string;
  canonical?: string;
  content: string;
  images: Array<{
    name: string;
    src: string;
  }>;
  authors: Array<{
    authorName: string;
    imgPath: string;
    quotes?: string;
  }>;
  writerNote: string;
  publishedAt: string;
  keyTakeaway?: string[];
  tags?: string[];
  outBoundLink?: {
    title: string | "Medium Dialogika";
    link: string | "https://medium.com/dialogika";
  };
  articleQuote?: {
    figure: string;
    quote: string;
  };
}

export interface BlogAuthorProps {
  authorName: string;
  imgPath: string;
  quotes?: string;
}
