"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import chai from "../public/chai.png";
import CardContainerSnippet from "./CardContainerSnippet";
import { Footer } from "./Footer";
import { title } from "process";
import medium from "../public/Medium (1).png"
import payToday from "../public/paytoday.png"
import studyNotion from "../public/studyNotion.png"
import Link from "next/link";
import { useNavigate } from "react-router-dom";
export function ThreeDCardDemo() {
  
  return (
    
   <>

   
   <div className="flex flex-col md:flex-row justify-between gap-4 ">
   <CardContainerSnippet
   title="Medium Blog(Under Development)"
   tagLine="A Developer blogs Section"
   image={medium}
   codeBase="https://github.com/abhyudaya29/mediun-blog"
   tryNow="https://mediun-blog.vercel.app/"
   
   />
   <CardContainerSnippet 
   title="Study Notion (Under Development)"
   tagLine="A Full-stack Ed-Tech Website"
   image={studyNotion}
   codeBase="https://github.com/abhyudaya29/mediun-blog"
   tryNow="https://study-notion-frontend-three-ruby.vercel.app/"
   />
   </div>
   <div 
   className="flex flex-col md:flex-row justify-between gap-4">
   <CardContainerSnippet
   title="Pay-Today(Under Development)"
   tagLine="Experience a Seemless Transaction" 
   image={payToday}
   codeBase="https://github.com/abhyudaya29/mediun-blog"
   tryNow="https://paytm-omega.vercel.app/"
   />
   <CardContainerSnippet
   title="Pay-Today Extended V"
   tagLine="Soon"
   image={chai}
   codeBase="https://github.com/abhyudaya29/mediun-blog"
   tryNow=""
   
   />
   
   </div>

   <Footer/>
   </>
   
  );
}
