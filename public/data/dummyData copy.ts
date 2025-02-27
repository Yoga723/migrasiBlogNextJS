
// Note setelah optimized lewat chatGPT
export interface BlogArticleProps {
    /**
     * Unique identifier for the article.
     * Generated from the title by removing disallowed symbols and replacing spaces with dashes.
     * For example: 
     * "7 Cara pidato didepan panggung !: Simak caranya" → "7-cara-pidato-didepan-panggung-simak-caranya"
     */
    id: string;
  
    /** The title of the blog article */
    title: string;
  
    /**
     * URL of the thumbnail image.
     * This image is uploaded to Cloudinary and should be displayed in the editor.
     */
    thumbnail: string;
  
    /**
     * A meta description for SEO.
     * This will be used in the `<meta name="description" ...>` tag.
     */
    metaData: string;
  
    /** Comma-separated keywords for SEO purposes */
    keywords: string;
  
    /** Optional call-to-action (CTA) text or link */
    cta?: string;
  
    /** Optional short description to be used on preview cards or landing pages */
    cardsDescription?: string;
  
    /**
     * The canonical URL for the blog article.
     * For example, if the title is:
     * "Pentingnya Mempelajari Dosen Penguji Sebelum Sidang Skripsi: Tips Persiapan Maksimal !"
     * the canonical should be:
     * "https://www.dialogika.co/blog/pentingnya-mempelajari-dosen-penguji-sebelum-sidang-skripsi-tips-persiapan-maksimal"
     *
     * This URL is also used in Open Graph tags and in JSON-LD (as mainEntityOfPage) for SEO.
     */
    canonical: string;
  
    /**
     * The main content of the article.
     * Typically this is generated using Quill.js.
     * It can be stored as HTML or as a Quill Delta (you might later change this type).
     */
    content: string;
  
    /**
     * Array of images that are embedded within the article.
     * Each image is uploaded to Cloudinary and its URL (src) is stored.
     * The name can be used as a reference or caption.
     */
    images: Array<{
      name: string;
      src: string;
    }>;
  
    /**
     * List of authors associated with the article.
     * Each object contains:
     * - `authorName`: the name of the author,
     * - `imgPath`: the URL/path to the author's profile image,
     * - `quotes`: an optional quote from the author.
     */
    authors: Array<{
      authorName: string;
      imgPath: string;
      quotes?: string;
    }>;
  
    /**
     * A note from the writer.
     * This can be displayed on the article page or kept for internal reference.
     */
    writerNote: string;
  
    /** The publication date of the article */
    publishedAt: Date;
  
  
    /**
     * Optional array of tags (keywords) that describe the article.
     */
    tags?: string[];
  
    /**
     * A highlighted quote from the article.
     * - `figure`: may be an image URL or author attribution.
     * - `quote`: the actual quote text.
     */
    articleQuote: {
      figure: string;
      quote: string;
    };
  }
  