import {Award, BookOpen, Users} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function OurStory() {
    return (
        <div className="mx-auto max-w-7xl px-12 sm:px-0">


            <div className='flex justify-center'>
                <Image
                
                src="/images/icon.png" // Replace with your actual image
                width={300}
                height={300}
                alt="Paragon Exterior Team"
                />
            </div>
            
            <div className='flex justify-center items-center py-20 flex-col'>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-lg mb-6">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Story
                </div>
                <p className=" font-semibold leading-none text-5xl text-center font-serif text-blue-950 sm:text-7xl">
                    Our Story
                </p>
            </div>


            <div className='space-y-8'>
                <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/8 text-center">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque commodi sunt laudantium laboriosam porro. Temporibus provident veniam, beatae nam commodi cumque porro maxime quam fugit odio deleniti fugiat dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque commodi sunt laudantium laboriosam porro. Temporibus provident veniam, beatae nam commodi cumque porro maxime quam fugit odio deleniti fugiat dolorem!

                </p>

                <p className="mt-8 text-xl font-medium text-pretty text-gray-600 sm:text-3xl/8 text-center">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Est eaque corrupti itaque, quidem nam doloribus maiores in 
                    impedit nihil tempora error repellendus incidunt provident, 
                    quae, magnam maxime ea harum. Ad?
                </p>
            </div>

            
        </div>
    )
}
