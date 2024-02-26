import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const ProfilePage = async () => {
    const sessionClaims = auth();
    const userId = sessionClaims?.userId as string;


    const organizedEvents = await getEventsByUser({ userId, page: 1 })

    return (
        <>
            { /* My Properties */}
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <div className='wrapper flex items-center justify-center sm:justify-between'>
                    <h3 className='h3-bold text-center sm:text-left'>My Properties</h3>
                    <Button asChild size="lg" className='button hidden sm:flex'>
                        <Link href="/#events">
                            Explore More Properties</Link>
                    </Button>
                </div>
            </section>

            {/* <section className='wrapper my-8'>
    <Collection 
        data={events?.data}
        emptyTitle="No Bookings Are Available"
        emptyStateSubtext="No worries, you can always book a visit later"
        collectionType="My_Tickets"
        limit={3}
        page={1}
        urlParamName='ordersPage'
        totalPages={2}/>
    </section> */}

            { /* Properties Posted */}
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <div className='wrapper flex items-center justify-center sm:justify-between'>
                    <h3 className='h3-bold text-center sm:text-left'>Listed Properties</h3>
                    <Button asChild size="lg" className='button hidden sm:flex'>
                        <Link href="/events/create">
                            Create New Listing</Link>
                    </Button>
                </div>
            </section>

            <section className='wrapper my-8'>
                <Collection
                    data={organizedEvents?.data}
                    emptyTitle="No Listings have been created yet"
                    emptyStateSubtext="Create listings to start getting bookings"
                    collectionType="Events_Organized"
                    limit={6}
                    page={1}
                    urlParamName='eventsPage'
                    totalPages={2} />
            </section>

        </>
    )
}

export default ProfilePage