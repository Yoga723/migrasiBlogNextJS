import mongoose, { Schema } from "mongoose";



const AuthorSchema = new Schema({
  authorName: { type: String, required: true },
  imgPath: { type: String, required: true },
  quotes: { type: String },
});

const OutBoundLinkSchema = new Schema({
  title: { type: String, default: "Medium Dialogika" },
  link: { type: String, default: "https://medium.com/dialogika" },
});

// Skema article untuk database di mongoDB
const articleSchema = new Schema(
  {
    idArticle: {
      type: String,
      required: [true, "Please provide an id from title"],
      unique: true,
    },
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
      type: String,
      required: [true, "Please provide the content for this article"],
    },
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
  },
  {
    timestamps: true,
    collection: "articleCollections",
  }
);

// If id is not provided, generate a new one
// articleSchema.pre("save", function (next) {
//   if (!this.idArticle) {
//     this.idArticle = this._id.toString();
//   }
//   next();
// });

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);
export default Article;
