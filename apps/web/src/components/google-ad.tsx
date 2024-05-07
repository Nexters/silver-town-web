"use client";

import { useEffect } from "react";

interface Props {
  slotId: string;
  height: React.CSSProperties["height"];
  WrapperComponent: (children: React.ReactNode) => React.ReactNode;
}

const GoogleAd = ({ slotId, height, WrapperComponent }: Props) => {
  useEffect(() => {
    if (!window.adsbygoogle || window.adsbygoogle.loaded) return;
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  if (!slotId) {
    console.error(
      "nextjs-google-adsense: publisherId or slotId can't be empty for the unit",
    );
    return null;
  }

  if (!window.adsbygoogle) return null;

  return WrapperComponent(
    <div className="googleAd-container" style={{ height }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="auto"
        data-ad-client={process.env.GOOGLE_ADS_CLIENT_ID}
        data-full-width-responsive="true"
        data-ad-slot={slotId}
      />
    </div>,
  );
};

export default GoogleAd;
