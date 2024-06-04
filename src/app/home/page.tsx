"use client"
/* eslint-disable @next/next/no-img-element */
import chai from "../home/public/chai.png"
import Image from "next/image"
import { TypewriterEffect } from "../components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LampDemo } from "../components/ui/lamp"
import {ThreeDCardDemo} from "./components/ProjectSection"
import { Buttons } from "../components/ui/moving-border"
// import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
// export function TypewriterEffectSmoothDemo() {
//         const words = [
//           {
//             text: "Chai",
//           },
//           {
//             text: "Bytes",
//           },
          
//           {
//             text: "Aceternity.",
//             className: "text-blue-500 dark:text-blue-500",
//           },
//         ];
const HomePage=()=>{
    const words = [
        {
            text: "Chai",
            className:"text-white"
        },
        {
            text: "And",
            className:"text-white"
        },
        
        {
            text: "Bytes",
            className: "text-red-500 dark:text-black-500",
        },
    ];
    

    return (
        <>
        <div className="flex flex-col justify-center items-center ">
            <Image
            className="w-[300px]  rounded-md"
            src={chai}
            width={500}
            height={300}
            alt="Picture of the author"
            />
            <div className="flex flex-col justify-center items-start mt-10 ">
                {/* <p className="text-5xl font-semibold antialiased md:subpixel-antialiased"> */}
                <div className=" flex justify-center items-center w-[600px] ">
                <TypewriterEffect words={words} />
                </div>
                {/* </p> */}
                <p className="font-inter pt-6 text-5xl font-semibold">It&apos;s Never to late to start again!</p>

            </div>
            <div className="flex flex-row justify-center items-center gap-6 mt-10">
                {/* button line ups */}
                <Button variant="outline">
                <Link href="https://github.com/abhyudaya29">Github</Link>
                </Button>
                <Button className="bg-white text-black" variant="destructive">
                <Link href="https://abhyudaya.hashnode.dev/">Blogs</Link>
                </Button>
                {/* <Button variant="outline">GitHub</Button>
                <Button variant="outline">GitHub</Button> */}
                <Link href="https://drive.google.com/file/d/1_8PJOWP51dOFi7oerbPONk68liGzcJKd/view?usp=sharing">
                <Buttons 
                        borderRadius="1.95rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800" >
                Resume
                </Buttons>
                </Link>
            </div>
            <div className="flex flex-col gap-2 mt-6">
            <LampDemo/>
            {/* heyyy */}
            </div>
            <ThreeDCardDemo/>
        </div>
        </>
    )
}
export default HomePage