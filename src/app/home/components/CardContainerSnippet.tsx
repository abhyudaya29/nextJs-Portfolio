"use client";

import React from 'react';
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import chai from "../public/chai.png";
import Image, { StaticImageData } from "next/image";
import { strict } from 'assert';
interface Cards{
  title:string,
  tagLine:string,
  image:string | StaticImageData
}
const CardContainerSnippet:React.FC<Cards> = ({title,tagLine,image}) => {
  return (
    <>
      <CardContainer className="inter-var w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto my-4">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-auto">
          <CardItem
            translateZ="50"
            className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-sm mt-2 dark:text-neutral-300"
          >
            {tagLine}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={image}
              height={1000}
              width={1000}
              className="h-40 sm:h-60 md:h-80 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300 ease-in-out"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10 sm:mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-3 sm:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default CardContainerSnippet;
