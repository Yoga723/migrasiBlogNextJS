// app/[id]/layout.tsx
import { basePath } from "@/next.config";
import { Metadata } from "next";
import React from "react";
import star from "@/public/assets/img/next.png";
import Image from "next/image";


// Global metadata
export const metadata: Metadata = {
  title: "Cara menggunakan .... - Kursus Public Speaking",
  description:
    "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
  keywords: "Blog Dialogika, Blog, blog, dialogika",
  authors: [{ name: "Dialogika Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Dialogika Blog - Kursus Public Speaking",
    description:
      "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
    url: "https://www.dialogika.co/blog/",
    siteName: "Dialogika | Kelas Public Speaking",
    images: [{ url: "https://www.dialogika.co/assets/img/logo.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dialogika_co",
    title: "Dialogika Blog - Kursus Public Speaking",
    description:
      "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
    images: ["https://www.dialogika.co/assets/img/logo.webp"],
  },
  icons: {
    icon: `${basePath}/assets/img/favicon.webp`,
    apple: `/${basePath}assets/img/apple-touch-icon.webp`,
  },
};

export default function articleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased">
      {/* Main content */}
      <main className="main">{children}</main>
      <a
        href="#tagging-up"
        className="back-to-top d-flex align-items-center justify-content-center active">
        <Image
          src={`${star}`}
          width={10}
          height={10}
          alt=""
        />
      </a>
    </div>
  );
}