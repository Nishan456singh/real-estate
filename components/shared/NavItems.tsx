'use client';

import { useUser } from '@clerk/clerk-react';
import { headerLinks } from '../../constants/index';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems: React.FC = () => {
  const { user } = useUser();
  const userId = user?.id ?? '';
  const pathname = usePathname();

  return (
    <ul className='md:flex-between flex w-full flex-col items-start
    gap-5 md:flex-row'>
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        // If the link label is 'Create Event' and the user ID is not the admin's ID, don't render the link
        if (link.label === 'Create Event' && userId !== 'user_2cOWqVtT5wGWLBd1F5Gs1ORGLMo') {
          return null;
        }

        return (
          <li
            key={link.route}
            className={`${isActive && 'text-gray-600'
              } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems