"use client"
// import React from 'react'

import {ChevronRightIcon, Sparkles, Users} from "lucide-react";
import Image from "next/image";


export default function AboutUsRow() {
    return (


        <div className="mt-16 grid grid-cols-1 py-8 md:py-12 gap-12 lg:grid-cols-2 lg:items-center pt-9 sm:space-x-24 space-y-14">

            <div className=" mx-10 sm:mx-0 max-w-xl lg:mx-0 lg:shrink-0 lg:pt-8 text-center sm:text-left">

                <div>
                    {/* <p>About us</p> */}
                    <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-lg mb-6">
                        <Users className="w-5 h-5 mr-2" />
                        About Us
                    </div>
                    <p className="mt-10 font-semibold  leading-none text-5xl font-serif text-blue-950 sm:text-7xl">
                        International Support
                    </p>
                </div>

                <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-2xl/8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque commodi sunt laudantium laboriosam porro. Temporibus provident veniam, beatae nam commodi cumque porro maxime quam fugit odio deleniti fugiat dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque commodi sunt laudantium laboriosam porro. Temporibus provident veniam, beatae nam commodi cumque porro maxime quam fugit odio deleniti fugiat dolorem!

                    </p>

            </div>
            <div className="flex justify-center-center lg:text-left">
                <Image
                    src="/images/international.png" // Replace with your actual image
                    alt="Paragon Exterior Team"
                    width={800}
                    height={800}
                    className="object-cover"
                />
            </div>

        </div>
    )
}





