import React from 'react'

export default function Stats() {
  return (
      <div className="w-5/6 mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-200">
          {[
              {label: "Activities Generated", value: "10k+"},
              {label: "Happy Users", value: "5k+"},
              {label: "Cities Covered", value: "50+"},
              {label: "Avg. Rating", value: "4.9"},
          ].map((stat) => (
              <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
          ))}
      </div>
  )
}
