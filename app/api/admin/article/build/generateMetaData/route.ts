import Article from "@/lib/mongodb/models/Article";
import dbConnect from "@/lib/mongodb/mongodb";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const GET = async (request: Request) => {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const idArticle = searchParams.get("idArticle");

    if (!idArticle) {
      return NextResponse.json({ status: 404, message: "idArticle not found" }, { status: 404, headers: corsHeaders });
    }
    const response = Article.findOne({ idArticle }).lean();

    if (!response) {
      return NextResponse.json(
        {
          status: 404,
          message:
            "idArticle not found in mongoDB database collection, Please make sure document with said idArticle exist in mongoDB",
        },
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json({ status: 200, data: response }, { status: 200, headers: corsHeaders });
  } catch (error: any) {
    console.error("Error in GET API route:", error);
    return NextResponse.json({ status: "error", message: error.message }, { status: 500, headers: corsHeaders });
  }
};
