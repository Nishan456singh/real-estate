'use client'

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonialCards = [
    {
      quote:
        'Working with the real estate agency transformed my understanding of the home buying process and helped me to find my dream home. The agents are knowledgeable and professional!',
      name: 'Alex Johnson',
      title: 'Homebuyer',
    },
    {
      quote:
        "The support and expertise provided by this real estate agency were unmatched. I not only sold my home quickly but also received a great price, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Home Seller',
    },
    {
      quote:
        "This real estate agency provided me with the tools and guidance to find the perfect rental property. I'm extremely grateful for their personalized assistance.",
      name: 'Michael Chen',
      title: 'Renter',
    },
    {
      quote:
        'As a real estate investor, finding the right partner can be challenging, but this agency matched me with an agent who truly understands my investment goals and challenges.',
      name: 'Emily Taylor',
      title: 'Investor:',
    },
    {
      quote:
        'The services provided by this real estate agency opened my eyes to the intricacies of commercial property ownership. Highly recommend for any aspiring property owners!',
      name: 'Chris Morales',
      title: 'Commercial Property Owner',
    },
  ];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonialCards}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards