import {config} from "@/config";
import Image from "next/image";
import React, {useState, useEffect, useRef} from "react";



interface HeroProps {
    text?: string
    secText?: string;

}
const Hero = ({text, secText}: HeroProps) => {



    return (
        <div className="relative h-[95vh] w-full overflow-hidden z-0">
            {/* Video Player */}
            <Image
                className="absolute top-0 left-0 h-full w-full object-cover"
                src="/images/cover2.jpeg"
                alt="ISSAC18"
                width={1920}
                height={1080}

            />
            {/* Overlay Content */}
            {/* <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-blue-950 bg-opacity-50 text-white text-center px-6">

                <div className="flex flex-col items-center px-6 md:px-16">
                    <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {text ? text : 'Expert Roofing Solutions'}
                    </h1>
                    <p className="font-secondary text-xl  mb-6">
                        {secText ? secText : 'Reliable, Affordable, and Built to Last'}
                    </p>
                </div>
            </div> */}

            {/* Overlay Content */}
            {/* <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-left justify-center bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent text-white text-center px-6">
                <div className="flex flex-col items-center px-6 md:px-16">
                    <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {text ? text : 'Expert Roofing Solutions'}
                    </h1>
                    <p className="font-secondary text-xl mb-6">
                        {secText ? secText : 'Reliable, Affordable, and Built to Last'}
                    </p>
                </div>
            </div> */}


            {/* Overlay Content */}
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end pb-20 bg-gradient-to-t from-blue-950 from-10% via-blue-950/70 via-40% to-transparent text-white text-center px-6">
                <div className="flex flex-col items-center px-6 md:px-16">
                    <p className="font-serif text-xl mb-6">
                        We are {config.name.name}
                    </p>
                    <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Healing Heroes of Israel
                    </h1>
                    <p className="font-serif text-xl mb-6 max-w-4xl">
                        When conflict erupted, a brave team of anesthesiologists answered the call. Now recognized by the State of Israel for their extraordinary service, ISSAC stands as a beacon of compassion and medical excellence in times of crisis
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;