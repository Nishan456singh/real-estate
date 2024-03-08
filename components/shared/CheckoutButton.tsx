"use client"

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { IEvent } from '@/lib/database/models/event.model';
import { loadStripe } from '@stripe/stripe-js';
import { checkoutOrder } from '@/lib/actions/order.actions';
import Link from 'next/link';
import Contact from './Contact'; // import your Contact component
import Checkout from './Checkout';
import { useState } from 'react';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton = ({ event, user }: { event: IEvent, user: any }) => {
  const [showContact, setShowContact] = useState(false);
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event && event.endDateTime) < new Date();

  return (
    <div className='flex items-center gap-3'>
      {/* cannot buy past event */}
      {hasEventFinished ? (
        <p className='p-2 text-red-400'>Sorry, listing is not available</p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className='button rounded--full' size="lg">
              {showContact ? (
                <Contact />
              ) : (
                <Link href="" onClick={() => setShowContact(true)}>
                  Book visit
                </Link>
              )}
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  )
}

export default CheckoutButton