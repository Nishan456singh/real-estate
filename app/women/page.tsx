import Collection from '@/components/shared/Collection'
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import React from 'react'

export async function WomenPage({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = searchParams?.query as string || "";
  const category = searchParams?.category as string || "";

  const events = await getAllEvents({
    query: searchText,
    limit: 6,
    page,
    category: 'women'
  });
  return (
    <>
      <Header />
      <section className="px-4 sm:px-6 mt-6 mb-6 lg:px-8">
        <Collection
          data={events?.data}
          emptyTitle="No selection available"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages} />
      </section>
      <Footer />
    </>
  )
}

export default WomenPage