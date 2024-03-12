'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">JDDW Booking</span>
      </Link>

      <Link href="/contacts" className="mr-6 flex items-center space-x-2">
        <span
          className={`${
            pathname === '/contacts' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          Contacts
        </span>
      </Link>
    </div>
  );
}
