import React from "react";
import BaseImage from "./BaseImage";
import { getBlurData } from "@/app/lib/utils";

const LAYOUT_URL =
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07";
const TwoSectionLayout = async () => {
  const { base64 } = await getBlurData(LAYOUT_URL);

  return (
    <section className="text-gray-600 body-font">
      <div className="w-11/12 max-w-4xl bg-orange-400 grid grid-cols-1 sm:grid-cols-12 mx-auto items-center  px-5 py-24 ">
        <div className="lg:pr-24 md:pr-16 col-span-12 md:col-span-6 md:text-left mb-16 md:mb-0 text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readme gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freeway heirloom neutral air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mash tote bag selvage hot chicken authentic tumeric truffaut hexagon
            try-hard chambray.
          </p>
          <div className="">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="w-full relative  h-[600px] col-span-12 md:col-span-6 ">
          <BaseImage
            fill
            sizes="(min-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded"
            alt="hero"
            src={LAYOUT_URL}
            blurData={base64}
          />
        </div>
      </div>
    </section>
  );
};

export default TwoSectionLayout;
