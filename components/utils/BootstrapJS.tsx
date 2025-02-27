/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import Script from "next/script";
import { useEffect } from "react";

const BootstrapJS = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default BootstrapJS;
