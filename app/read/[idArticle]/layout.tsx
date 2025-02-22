// app/[id]/layout.tsx
import { basePath } from "@/next.config";
import { Metadata } from "next";
import React from "react";
import star from "@/public/assets/img/next.png";
import Image from "next/image";

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
