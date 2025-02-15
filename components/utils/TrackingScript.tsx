"use client";
import Script from "next/script";
import React, { useEffect } from "react";

const TrackingScript = () => {
  useEffect(() => {
    // Form submission handlers
    const handleHeroForm = async (e: Event) => {
      e.preventDefault();
      const form = document.getElementById("rate-us") as HTMLFormElement;
      const formData = new URLSearchParams(new FormData(form) as any).toString();

      try {
        await fetch("https://api.apispreadsheets.com/data/V67SEkSOUdvoeJQn/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
        });
        alert("Thank You For Your Rating");
      } catch (error) {
        alert(`There was an error :( : ${error}`);
      }
    };

    const handleSubscription = async (e: Event) => {
      e.preventDefault();
      const form = document.getElementById("subcriptions") as HTMLFormElement;
      const formData = new URLSearchParams(new FormData(form) as any).toString();

      try {
        await fetch("https://api.apispreadsheets.com/data/18511/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
        });
        window.location.href = "https://link.dialogika.co/open-whatsapp-group";
      } catch (error) {
        alert(`There was an error :( : ${error}`);
      }
    };

    // Attach event listeners
    const rateUsForm = document.getElementById("rate-us");
    const subscriptionForm = document.getElementById("subcriptions");

    if (rateUsForm) rateUsForm.addEventListener("submit", handleHeroForm);
    if (subscriptionForm) subscriptionForm.addEventListener("submit", handleSubscription);

    return () => {
      if (rateUsForm) rateUsForm.removeEventListener("submit", handleHeroForm);
      if (subscriptionForm) subscriptionForm.removeEventListener("submit", handleSubscription);
    };
  }, []);
  return (
    <>
      {/* Tracking Scripts */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '916674555903437');
              fbq('track', 'PageView');
          `,
        }}
      />

      <Script
        id="quora-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(q,e,v,n,t,s){
              if(q.qp)return;n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);};
              n.queue=[];t=document.createElement(e);t.async=!0;t.src=v;
              s=document.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
            }(window,'script','https://a.quora.com/qevents.js');
            qp('init','cae6711903da464ab62f03df5f66aedc');
            qp('track','ViewContent');
          `,
        }}
      />

      <Script
        id="gtag"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-HV60XT856G"
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HV60XT856G');
            gtag('config', 'UA-148836422-2');
          `,
        }}
      />

      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGK9D6H');
          `,
        }}
      />

      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2828594,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* Noscript fallbacks */}
      <noscript>
        <img
          alt="img"
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=916674555903437&ev=PageView&noscript=1"
        />
        <img
          alt="img"
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://q.quora.com/_/ad/cae6711903da464ab62f03df5f66aedc/pixel?tag=ViewContent&noscript=1"
        />
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KGK9D6H"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
};

export default TrackingScript;
