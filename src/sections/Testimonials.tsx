"use client"
import React from "react";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


export const testimonials = [
  {
    quote:
      "Sphereal has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Ashwin Santiago",
    title: "Operations Manager",
    image: AshwinSantiago,
  },
  {
    quote:
      "Sphereal integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Alec Whitten",
    title: "Lead Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Sphereal's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Rene Wells",
    title: "Customer Success Manager",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Sphereal. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Mollie Hall",
    title: "Product Designer",
    image: MollieHall,
  },
];



export const Testimonials = () => {
  const SELECTED_TESTIMONIAL_INDEX = 0
  return (
    <section >
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <div className="border-gradient rounded-3xl px-6  md:px-10 lg:px-16 lg:py-24 py-16 relative flex flex-col   md:flex-row items-center gap-12 lg:mx-20" >
              <FontAwesomeIcon icon={faQuoteLeft} className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2" />
              {testimonials.map((testimonial, index) => (
                <React.Fragment key={testimonial.name}>
                  {SELECTED_TESTIMONIAL_INDEX === index && (
                    <blockquote key={testimonial.name} className="flex flex-col gap-12 lg:flex-row">
                      <p className="text-xl md:text-2xl font-medium">{testimonial.quote}</p>
                      <cite className="not-italic lg:text-right">
                        <Image src={testimonial.image} alt={testimonial.name} className="rounded-xl size-28 max-w-none" />
                        <div className="font-bold mt-4">{testimonial.name}</div>
                        <div className="text-xs text-gray-400 mt-2">{testimonial.title}</div>
                      </cite>
                    </blockquote>
                  )}
                </React.Fragment>
              ))}
              <div className="flex gap-2 md:flex-col justify-center ">
                {testimonials.map((testimonial, index) => (
                  <div className="size-6 relative isolate inline-flex items-center justify-center" key={testimonial.name} >
                    {SELECTED_TESTIMONIAL_INDEX === index && (
                      <div className="absolute border-gradient size-full rounded-full -z-10"></div>
                    )}
                    <div className="size-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>);
};

export default Testimonials;
