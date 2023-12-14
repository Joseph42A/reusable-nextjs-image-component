import { getBlurData } from "@/app/lib/utils";

import React from "react";
import BaseImage from "./BaseImage";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Cat 1",
    description:
      "Cat 1 is a playful and energetic feline who loves to explore and chase toys around the house.",
    imgSrc:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Cat 2",
    description:
      "Cat 2 is a calm and affectionate furry friend who enjoys lounging in cozy spots and getting cuddles.",
    imgSrc:
      "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Cat 3",
    description:
      "Cat 3 is an adventurous and curious cat who loves exploring the outdoors and climbing trees.",
    imgSrc:
      "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  // This is for an error image
  // {
  //   id: 4,
  //   title: "Cat 2",
  //   description:
  //     "Cat 3 is an adventurous and curious cat who loves exploring the outdoors and climbing trees.",
  //   imgSrc:
  //     "https://images.unsplash.com/photo-1651950537598-373e4358d3202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  // },
];

const Cards = () => {
  return (
    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {data.map((x) => (
        <Card key={x.id} {...x} />
      ))}
    </section>
  );
};

async function Card({ imgSrc, title, description }) {
  const { base64 } = await getBlurData(imgSrc);
  return (
    <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href="#">
        <div className="relative h-80">
          <BaseImage
            blurData={base64}
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            className="object-cover rounded-t-xl"
          />
        </div>
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-gray cursor-auto my-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
