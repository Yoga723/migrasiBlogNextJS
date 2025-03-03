/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "@/lib/mongodb/mongodb";
import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Fungsi/Route ini digunakan server/vercel untuk memulai proses build/generate dan deploy di halaman baru di github saat tim copywriter selesai.
//  Intinya automatisasi push blog/deploy blog
export const POST = async (request: Request) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER; // "your-username"
  const repo = process.env.GITHUB_REPO;
  try {
    await dbConnect();
    if (!GITHUB_TOKEN || !owner || !repo) {
      return NextResponse.json({ error: "Missing GitHub configuration" }, { status: 500, headers: corsHeaders });
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
      return NextResponse.json({ error: errorText }, { status: response.status, headers: corsHeaders });
    }

    // Override 204 status to 200 since we want to send a JSON response
    const statusToReturn = response.status === 204 ? 200 : response.status;

    return NextResponse.json(
      { message: "Triggered pages rebuild successfully" },
      { status: statusToReturn, headers: corsHeaders }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
};
