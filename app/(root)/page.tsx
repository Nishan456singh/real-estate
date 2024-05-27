import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection"
import Contact from "@/components/shared/Contact";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button"
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link"
import TestimonialCards from "@/components/shared/TestimonialCards";
import HeroSection from "@/components/shared/HeroSection";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = searchParams?.query as string || "";
  const category = searchParams?.category as string || "";


  const events = await getAllEvents({
    query: searchText,
    limit: 6,
    page,
    category
  });
  return (
    <>
      <HeroSection />
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No selection available"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={page}
          totalPages={events?.totalPages} />
      </section>
    </>
  )
}
