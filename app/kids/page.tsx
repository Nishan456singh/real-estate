import Collection from '@/components/shared/Collection'
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header'
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import React from 'react'
import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions';

async function KidsPage({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = searchParams?.query as string || "";
  const category = searchParams?.category as string || "";

  const events = await getAllEvents({
    query: searchText,
    limit: 6,
    page,
    category:'kids'
  });
    const event = await getEventById(category);

    const relatedEvents = await getRelatedEventsByCategory({
        categoryId: event.category._id,
        eventId: event._id,
        page: searchParams.page as string,
    })
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
    <section className='wrapper my-8 flex flex-col gap-8 mg:gap12'>
                <h2 className='h2-bold text-gray-600'>You May Also Like</h2>

                <Collection
                    data={relatedEvents?.data}
                    emptyTitle="No Selection Available"
                    emptyStateSubtext="Come back later"
                    collectionType="All_Events"
                    limit={3}
                    page={searchParams.page as string}
                    totalPages={relatedEvents?.totalPages} />
            </section>
    <Footer />
  </>
  )
}

export default KidsPage