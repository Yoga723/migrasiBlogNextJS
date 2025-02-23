import dbConnect from "@/lib/mongodb/mongodb";
import Article from "@/lib/mongodb/models/Article";
import { NextResponse } from "next/server";

// Function untuk memanggil
export async function GET() {
  try {
    // Connect to your MongoDB database
    await dbConnect();

    // Fetch all articles
    // Using .lean() converts the result to plain JavaScript objects.
    const articles = await Article.find({}).lean();

    // Return the list as JSON.
    return NextResponse.json(articles);
  } catch (error: any) {
    console.error("Error in build API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
