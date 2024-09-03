import React from "react";
import Image from "next/image";
import { navigationLinks } from "@/lib/data";
import Link from "next/link";

function MainMenu() {
  return (
    <div className='grid grid-cols-3 max-w-full items-center px-10'>
      <Image
        src='/assets/logos/logoipsum.svg'
        alt='Logo'
        width={70}
        height={70}
      />
      <nav className='flex items-center justify-center h-12'>
        <ul className='flex text-[0.9rem] font-medium text-gray-500 gap-1'>
          {navigationLinks.map((link) => (
            <li className='h-3/4 relative' key={link.hash}>
              <Link
                className='flex w-full items-center justify-center px-6 py-3 hover:text-gray-950 transition'
                href={link.hash}
              >
                {link.name}
                <span className='bg-[#6c9a5a1b] rounded-full absolute inset-0 -z-10'></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <ul className='flex justify-end items-center gap-6'>
          <li>Sign in</li>
          <li>Language</li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
