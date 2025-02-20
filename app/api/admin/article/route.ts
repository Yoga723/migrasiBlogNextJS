import Article from "@/lib/mongodb/models/Article";
import dbConnect from "@/lib/mongodb/mongodb";
import { BlogArticleProps } from "@/types";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

// Function untuk mengirim artikel blog baru ke database
export const POST = async (request: Request) => {
  try {
    await dbConnect();
    console.log("connected to mongoDB");

    const payload: Partial<BlogArticleProps> = await request.json();

    // Update artikel blog bila artikel dengan idArticle sudah ada, bila tidak ada maka buat baru
    const result = await Article.updateOne({ idArticle: payload.idArticle }, { $set: payload }, { upsert: true });

    console.log("Data sent to mongoDB");
    return NextResponse.json({ status: "success", result }, { status: 200 });
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }
};
