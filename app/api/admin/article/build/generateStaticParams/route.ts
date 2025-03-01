import dbConnect from "@/lib/mongodb/mongodb";
import Article from "@/lib/mongodb/models/Article";
import { NextResponse } from "next/server";

// Function ini digunakan server/vercel untuk GET semua artikel blog di mongoDB saat proses build di github pages 
export async function GET() {
  try {
    // Connect to your MongoDB database
    await dbConnect();

    // Fetch all articles
    const articles = await Article.find({}).lean();

    // Return the list as JSON.
    return NextResponse.json(articles);
  } catch (error: any) {
    console.error("Error in build API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
