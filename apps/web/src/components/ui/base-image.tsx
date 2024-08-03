import Image from "next/image";
import { ImageProps } from "next/image";
import React from "react";
import { IMAGE_BLUR_DATA_URL } from "~/constants/image";

interface Props extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  width?: number;
}

const BaseImage = ({ width, ...rest }: Props) => {
  const isPerformanceConsidered = width && width > 40;
  const placeholder = isPerformanceConsidered ? "blur" : undefined;
  const blurDataURL = isPerformanceConsidered ? IMAGE_BLUR_DATA_URL : undefined;
  return (
    <Image
      {...rest}
      width={width}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
};

export default BaseImage;
