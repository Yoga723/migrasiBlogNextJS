// Dari 23-02-2025 discontinued, kemungkinan tidak akan dipakai
import Authors from "@/lib/mongodb/models/Authors";
import dbConnect from "@/lib/mongodb/mongodb";
import { NextResponse } from "next/server";

// Function untuk mengambil data-data authors/penulis blog dari database
export const GET = async () => {
  try {
    await dbConnect();
    // Mengambil seluruh data author dari database di mongoDB
    const authors = await Authors.find({}).lean();

    return NextResponse.json(authors, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching authors:", error);
    // Return an error message if something goes wrong
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
