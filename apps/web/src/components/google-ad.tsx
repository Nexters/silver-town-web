"use client";

import { useEffect } from "react";

interface Props {
  adType: string;
}

const GoogleAd = ({ adType }: Props) => {
  useEffect(() => {
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="googleAd-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client={process.env.GOOGLE_ADS_CLIENT_ID}
        data-ad-slot={adType}
      />
    </div>
  );
};

export default GoogleAd;
