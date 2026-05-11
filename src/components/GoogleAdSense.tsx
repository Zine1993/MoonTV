'use client';

import Script from 'next/script';

export default function GoogleAdSense() {
  const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || 'ca-pub-4924086303698003';

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        id="adsense-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </>
  );
}
