import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection"
import Contact from "@/components/shared/Contact";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button"
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image"
import Link from "next/link"
import TestimonialCards from "@/components/shared/TestimonialCards";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = searchParams?.query as string || "";
  const category = searchParams?.category as string || "";


  const events = await getAllEvents({
    query: '',
    limit: 6,
    page,
    category
  });
  return (
    <>
      <section className="bg-primary-50 bg-contain bg-custom py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Is that HOME, you are Dreaming off ?
              <br />Let's make your DREAM Comes True</h1>
            <p className="p-regular-20 md:p-regular-24">"I am honoured to help you find your next home.
              My experience working in the GTA has allowed me to gain vast knowledge about this marketplace.
              I know what buyers want, and what sellers can command on the open market.
              Allow me to put my expertise to work for you and your family. "

            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Our Neighborhoods
              </Link>
            </Button>
          </div>

          <video src="/assets/video/real.mp4" className="w-50 h-26 rounded-lg" autoPlay loop muted />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">

        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* <Search /> */}
          <CategoryFilter />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Property Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={page}
          totalPages={events?.totalPages} />
          <TestimonialCards /> 
          <Contact />
      </section>
    </>
  )
}
