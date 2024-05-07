"use client";

import React from "react";
import GoogleAd from "./google-ad";
import Separator from "./ui/separator";

const PhraseWebGoogleAd = () => {
  return (
    <GoogleAd
      slotId="6499242313"
      height="90px"
      WrapperComponent={(children) => (
        <>
          <div className="px-4 py-4">{children}</div>
          <Separator />
        </>
      )}
    />
  );
};

export default PhraseWebGoogleAd;
