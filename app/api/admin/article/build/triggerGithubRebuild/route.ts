/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "@/lib/mongodb/mongodb";
import { NextResponse } from "next/server";

// Fungsi/Route ini digunakan server/vercel untuk memulai proses build/generate dan deploy di halaman baru di github saat tim copywriter selesai.
//  Intinya automatisasi push blog/deploy blog
export const POST = async (request: Request) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER; // e.g. "your-username"
  const repo = process.env.GITHUB_REPO;
  try {
    await dbConnect();
    if (!GITHUB_TOKEN || !owner || !repo) {
      return NextResponse.json({ error: "Missing GitHub configuration" }, { status: 500 });
    }

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/dispatches`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        event_type: "trigger-pages-rebuild",
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }
    return NextResponse.json({ message: "Triggered pages rebuild successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
