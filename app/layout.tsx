/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./styles/globals.css";
import { basePath } from "@/next.config";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BootstrapJS from "@/components/utils/BootstrapJS";
import TrackingScript from "@/components/utils/TrackingScript";
import ReduxProvider from "@/components/utils/ReduxProvider";

// Global metadata
export const metadata: Metadata = {
  title: "Dialogika Blog - Kursus Public Speaking",
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
    icon: `https://www.dialogika.co/assets/img/favicon.webp`,
    apple: `https://www.dialogika.co/assets/img/apple-touch-icon.webp`,
  },
};

export const GlobalScripts = () => (
  <>
    {/* Main Custom JS */}
    <Script
      src={`${basePath}/assets/js/main.js`}
      strategy="lazyOnload"
    />

    {/* Vendor JS */}
    <Script src={`../public/assets/vendor/international-phone-number/intlTelInput.min.js`} />
    <Script src={`../public/assets/vendor/international-phone-number/script.js`} />

    {/* External Icons */}
    <Script
      src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"
      strategy="lazyOnload"
    />
  </>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <TrackingScript />
        <ReduxProvider>
          <Header />
          <main className="main mb-4">{children}</main>
          <Footer />
        </ReduxProvider>
        {/* Global Scripts */}
        <GlobalScripts />
        <BootstrapJS />
      </body>
    </html>
  );
}
