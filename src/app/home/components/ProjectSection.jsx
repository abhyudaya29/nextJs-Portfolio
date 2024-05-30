"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../../app/components/ui/3d-card";
import Link from "next/link";
import chai from "../public/chai.png";
import CardContainerSnippet from "./CardContainerSnippet";
import { Footer } from "./Footer";
import { title } from "process";
import medium from "../public/Medium.png"
export function ThreeDCardDemo() {
  return (
   <>
   <div className="flex flex-row justify-between gap-4">
   <CardContainerSnippet
   title="Medium Blog(Under Development)"
   tagLine="A Developer blogs Section"
   image={medium}

    />
   <CardContainerSnippet 
   title="Study Notion (Under Development)"
   tagLine="A Full-stack Ed-Tech Website"
   image={chai}
   />
   </div>
   <div 
   className="flex flex-row justify-between gap-4">
   <CardContainerSnippet
   title="Pay-Today(Under Development)"
   tagLine="Experience a Seemless Transaction" 
   image={chai}
   />
   <CardContainerSnippet
   title="Pay-Today Extended V"
   tagLine="Soon"
   image={chai}
   
   />
   
   </div>
   <Footer/>
   </>
   
  );
}
