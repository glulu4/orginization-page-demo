import {config} from "@/config";
import Image from "next/image";
import React from "react";

interface HeroProps {
    text?: string;
    secText?: string;
}

const Hero = ({text, secText}: HeroProps) => {
    const para1 = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae voluptate mollitia quasi necessitatibus sapiente ut, laborum aliquid aperiam deserunt beatae similique consectetur debitis nam quaerat perspiciatis corporis. Animi, esse.

  `;

    const para2 = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae voluptate mollitia quasi necessitatibus sapiente ut, laborum aliquid aperiam deserunt beatae similique consectetur debitis nam quaerat perspiciatis corporis. Animi, esse.


  `;

    const para3 = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae voluptate mollitia quasi necessitatibus sapiente ut, laborum aliquid aperiam deserunt beatae similique consectetur debitis nam quaerat perspiciatis corporis. Animi, esse.
  `;

    return (
        <div className="relative w-full min-h-screen z-0">
            <img
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="/images/cover2.jpeg"
                alt="ISSAC18"
                width={1920}
                height={1080}

            />
            <div className="relative z-10 flex w-full flex-col justify-center bg-gradient-to-t from-blue-950/90 from-10% via-blue-950/60 via-40% to-transparent text-white px-6 pt-[200px] pb-12 min-h-screen">
                <div className="flex flex-col text-left items-start justify-start sm:w-3/4 mx-auto max-w-7xl">
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Organization Name
                    </h1>
                    <p className="font-serif sm:text-xl mb-6 max-w-5xl">
                        {para1}
                    </p>
                    <p className="font-serif sm:text-xl mb-6 max-w-4xl">
                        {para2}
                    </p>
                    <p className="font-serif sm:text-xl mb-6 max-w-4xl">
                        {para3}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
