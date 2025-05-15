import {HammerIcon, HomeIcon, SunIcon} from "lucide-react";
import Image from "next/image";



const cards = [
    {
        name: 'Custom Roof Installations',
        description: 'Choose from a variety of roofing types, including asphalt shingles, metal roofing, clay tiles, and flat roofs. We’ll help you find the perfect fit for your style, budget, and climate needs.',
        icon: HomeIcon,
    },
    {
        name: 'Solar Roof Solutions',
        description: 'Embrace the future of energy with solar-integrated roofing systems. Lower your energy bills and increase your home’s value with sustainable, state-of-the-art technology.',
        icon: SunIcon,
    },
    {
        name: 'Repairs & Maintenance',
        description: 'Keep your roof in peak condition with our expert repair and maintenance services. From fixing leaks to restoring storm-damaged roofs, we’ve got you covered.',
        icon: HammerIcon,
    },
]

export default function StateOfIsrael() {
    return (
        <div className="relative isolate bg-gray-900 py-40 sm:py-56">
            {/* Background Image */}
            <Image
                alt="state of israel flag"
                src="/images/flag.png"
                width={1920}
                height={1080}
                className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
            />

            {/* Dark Tint Overlay - Moved right after background image with lower z-index */}
            <div className="absolute inset-0 -z-10 bg-black bg-opacity-75"></div>

            {/* Decorative Gradients */}
            <div className="hidden sm:block sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:transform-gpu sm:blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#80bdff] to-[#040d85] opacity-30"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading Section */}
                <div className="flex flex-col items-center justify-center">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="mt-10 font-semibold  py-9 leading-none text-5xl text-center font-serif text-white sm:text-7xl">
                            Reconized by the State of Israel
                        </p>
                        <p className="mt-8 text-xl font-medium text-pretty text-white sm:text-3xl/8 text-center">
                            We are a volunteer-led network of anesthesiologists united by a shared mission: to provide critical support during times of need. 
                            Our team is dedicated to ensuring that patients receive the highest quality of care, no matter the circumstances. 
                            We believe in the power of collaboration and the importance of sharing knowledge and resources to improve patient outcomes.
                        </p>
                    </div>
                </div>


                {/* Cards Section */}
                {/* <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                            <card.icon aria-hidden="true" className="h-7 w-7 flex-none text-amber-200" />
                            <div className="text-base">
                                <h3 className="font-semibold text-neutral-50">{card.name}</h3>
                                <p className="mt-2 text-gray-300">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}