"use client";

import AboutUsRow from "@/components/landing/AboutUsRow";
import CTA from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import OurStory from "@/components/landing/OurStory";
import OurValues from "@/components/landing/OurValues";
import StateOfIsrael from "@/components/landing/StateOfIsrael";
import Stats from "@/components/landing/Stats";
import VolunteerStories from "@/components/VolunteerStories";

const Page = () => {
  return (
    <div className="mb-10">
      
      <div>
        <Hero/>
      </div>

      <div id="about" className="mx-auto max-w-7xl">
        <AboutUsRow/>
      </div>

      <div>
        <Stats/>
      </div>

      <div id="volunteer">
        <VolunteerStories />
      </div>
      <div id="values">
        <OurValues />
      </div>

      <div id="story" className="pb-40">
        <OurStory/>
      </div>

      <div>
        <StateOfIsrael/>
      </div>

      <div id="help">
        <CTA/>
      </div>


    </div>
  );
};

export default Page;


