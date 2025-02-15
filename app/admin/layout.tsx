import { basePath } from "@/next.config";
import { Metadata } from "next";
import React from "react";

// Global metadata
export const metadata: Metadata = {
  title: "Admin Page Dialogika",
  description:
    "Dialogika Blog: Learn tips and best practices from our Dialogika mentor and team on topics from Mental Health & Social Science and Mindset to Public Speaking.",
  keywords: "Blog Dialogika, Blog, blog, dialogika",
  authors: [{ name: "Dialogika Team" }],
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

export default async function adminLayout({ children }: { children: React.ReactNode }) {
  

  console.log("ini adalah urinya mongodb:  ", process.env.MONGODB_URI);

  return (
    <div className="antialiased">
      {/* Main content */}
      <main className="main">{children}</main>
    </div>
  );
}
