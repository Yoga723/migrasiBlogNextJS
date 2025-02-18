import { BlogArticleProps } from "@/types";
import dbConnect from "../mongodb";

export async function createArticle(payload: Partial<BlogArticleProps>) {
  await dbConnect();
  // const newArticle = 
}
