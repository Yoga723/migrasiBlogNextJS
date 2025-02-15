import mongoose, { Schema } from "mongoose";

// Sub-schemas untuk array
const ImageSchema = new Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
});

const AuthorSchema = new Schema({
  authorName: { type: String, required: true },
  imgPath: { type: String, required: true },
  quotes: { type: String },
});

const OutBoundLinkSchema = new Schema({
  title: { type: String, default: "Medium Dialogika" },
  link: { type: String, default: "https://medium.com/dialogika" },
});

const ArticleQuoteSchema = new Schema({
  figure: { type: String, required: true },
  quote: { type: String, required: true },
});

// Delta content schema (for Quill.js)
const DeltaSchema = new Schema(
  {
    ops: [
      {
        type: Schema.Types.Mixed,
        required: true,
      },
    ],
  },
  { _id: false }
);

// Skema artikel untuk database di mongoDB
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this article"],
    },
    thumbnail: {
      type: String,
      required: [true, "Please provide a thumbnail URL"],
    },
    metaData: {
      type: String,
      required: [true, "Please provide meta data"],
    },
    keywords: {
      type: String,
      required: [true, "Please provide keywords"],
    },
    cta: String,
    cardsDescription: String,
    canonical: String,
    content: {
      type: DeltaSchema,
      required: [true, "Please provide the content for this article"],
    },
    images: [ImageSchema],
    authors: [AuthorSchema],
    writerNote: {
      type: String,
      required: [true, "Please provide writer note"],
    },
    publishedAt: {
      type: String,
      required: [true, "Please provide publication date"],
    },
    keyTakeaway: [String],
    tags: [String],
    outBoundLink: OutBoundLinkSchema,
    articleQuote: ArticleQuoteSchema,
  },
  {
    timestamps: true,
    collection: "articleBlog",
  }
);

// If id is not provided, generate a new one
articleSchema.pre("save", function (next) {
  if (!this.id) {
    this.id = this._id.toString();
  }
  next();
});

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);
export default Article;
