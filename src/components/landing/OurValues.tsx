import {Award, CaptionsIcon, Hand, Rocket, ShieldPlus, SparklesIcon, SunIcon, Users} from 'lucide-react'
import React from 'react'

const values = [
    {
        name: 'Be world-class.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: Rocket,
    },
    {
        name: 'Take responsibility.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Hand,
    },
    {
        name: 'Be supportive.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
        icon: Users,
    },
    {
        name: 'Always learning.',
        description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
        icon: CaptionsIcon,
    },
    {
        name: 'Share everything you know.',
        description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
        icon: SparklesIcon,
    },
    {
        name: 'Enjoy downtime.',
        description: 'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
        icon: SunIcon,
    },
]

export default function OurValues() {
  return (
      <div className="mx-auto my-20 px-6 sm:my-40 lg:px-8 bg-blue-900 p-28">
          <div className="mx-auto max-w-4xl text-center ">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50/5 rounded-full text-white text-lg mb-6">
                  <Award className="w-5 h-5 mr-2" />
                  Values
              </div>
              <p className="mt-10 font-semibold  py-9 leading-none text-5xl text-center font-serif text-white sm:text-7xl">
                Our values
                </p>
              <p className="mt-8 text-xl font-medium text-pretty text-white sm:text-3xl/8 text-center">

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                  dolor cupiditate blanditiis.
              </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-auto lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
              {values.map((value) => (
                  <div
                      key={value.name}
                      className="relative max-w-xl flex flex-col items-center text-center mx-auto px-4 sm:pl-9"
                  >
                      <dt className="block font-semibold text-white font-serif text-xl">
                          <value.icon aria-hidden="true" className="size-8 mx-auto text-sky-500 mb-5" />
                          {value.name}
                      </dt>
                      <dd className="block text-center text-lg mt-2">
                          {value.description}
                      </dd>
                  </div>
              ))}
          </dl>

          {/* <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-auto lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
              {values.map((value) => (
                  <div key={value.name} className="relative max-w-xl pl-9 flex flex-col items-center text-center mx-auto">
                      <dt className="inline font-semibold text-white font-serif text-xl">
                          <value.icon aria-hidden="true" className="size-8 mx-auto text-indigo-500 mb-5" />
                          {value.name}
                      </dt>
                      <dd className="inline text-center text-lg mt-2">{value.description}</dd>
                  </div>
              ))}
          </dl> */}
      </div>
  )
}
