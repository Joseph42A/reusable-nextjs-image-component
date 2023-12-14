"use client";
import React, { useState } from "react";
import placeholderImage from "@/assets/placeholder.jpg";
import Image from "next/image";
import defaultBlur from "@/assets/blurData";

export default function BaseImage({ src, width, height, blurData, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={!!blurData ? blurData : defaultBlur}
      onError={() => {
        setImgSrc(placeholderImage);
      }}
      {...rest}
    />
  );
}
