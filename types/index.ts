export interface BlogArticleProps {
  _id?: string; // Ini generate otomatis dari mongoDBnya
  idArticle: string;
  title: string;
  thumbnail: string;
  metaData: string;
  keywords: string;
  cta?: string;
  cardsDescription?: string;
  canonical?: string;
  content: string;
  authors: Array<{
    authorName: string;
    imgPath: string;
    quotes?: string | "No quotes from me 🤪";
  }>;
  writerNote: string;
  publishedAt: string;
  keyTakeaway?: string[];
  tags?: string[];
  outBoundLink?: {
    title: string | "Medium Dialogika";
    link: string | "https://medium.com/dialogika";
  };
}

export interface BlogAuthorProps {
  authorName: string;
  imgPath: string;
  quotes?: string | "No quotes from me 🤪";
}
