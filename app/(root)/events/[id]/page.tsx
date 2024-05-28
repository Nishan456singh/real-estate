import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types'
import React from 'react'
import Image from 'next/image'
import { formatDateTime } from '@/lib/utils';
import Collection from '@/components/shared/Collection';
import CheckoutButton from '@/components/shared/CheckoutButton';

const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const event = await getEventById(id);

    const relatedEvents = await getRelatedEventsByCategory({
        categoryId: event.category._id,
        eventId: event._id,
        page: searchParams.page as string,
    })
    return (
        <>
            <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
                    <Image
                        src={event.imageUrl}
                        alt={'hero image'}
                        width={1000}
                        height={1000}
                        className='min-h-[300px] object-center object-cover '
                    />

                    <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
                        <div className='flex flex-col gap-6'>
                            <h2 className='h2-bold'>{event.title}</h2>

                            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                                <div className='flex gap-3'>
                                    <p className="p-bold-12 rounded-sm bg-green-500/40 px-5 py-2 text-green-900">
                                        {event.isFree ? 'Free' : `$${event.price}`}
                                    </p>
                                    <p className="p-medium-12 rounded-sm bg-grey-500/10 px-4 py-2.5 text-grey-500">
                                        {event.category.name}
                                    </p>
                                </div>
                                {/* <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                                    by{' '}
                                    <span className="text-gray-500">{event.organizer.firstName} {event.organizer.lastName}</span>
                                </p> */}
                            </div>
                        </div>
                        <CheckoutButton event={event}/>

                        <div className="flex flex-col gap-5">
                            {/* <div className='flex gap-2 md:gap-3'>
                                <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
                                <div className="p-medium-16 lg:p-regular-20 flex flex-col items-center">
                                    <p>
                                        {formatDateTime(event.startDateTime).dateOnly} - {' '}
                                        {formatDateTime(event.startDateTime).timeOnly}
                                    </p>
                                    <p>
                                        {formatDateTime(event.endDateTime).dateOnly} -  {' '}
                                        {formatDateTime(event.endDateTime).timeOnly}
                                    </p>
                                </div>
                            </div> */}

                            <div className="p-regular-20 flex items-center gap-3">
                                <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} />
                                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='p-bold-20 text-black'>Product Details</p>
                            <p className='p-medium-16 lg:p-regular-18'>{event.description}</p>
                            <p className='p-medium-16 lg:p-regular-18 truncate text-gray-700 underline'>
                                {event.url}</p>
                        </div>
                    </div>
                </div>
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
        </>
    )
}

export default EventDetails