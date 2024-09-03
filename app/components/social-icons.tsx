import React from "react";
import Image from "next/image";

export default function SocialIcons() {
  return (
    <div className='relative flex gap-6 items-center justify-center w-max'>
      <a
        href='https://twitter.com/'
        target='_blank'
        className='text-white hover:opacity-75 peer/x'
      >
        X
      </a>
      <Image
        src='/assets/logos/x-logo.svg'
        width={40}
        height={40}
        alt='X Logo'
        className='absolute -left-3 bottom-6 rounded-lg bg-slate-100 p-2 rotate-3 opacity-0 peer-hover/x:opacity-100 peer-hover/x:bottom-8 transition-all'
      />
      <a
        href='https://www.linkedin.com/'
        target='_blank'
        className='text-white hover:opacity-75 peer/linkedin'
      >
        LinkedIn
      </a>
      <Image
        src='/assets/logos/linkedin-logo.svg'
        width={40}
        height={40}
        alt='LinkedIn logo'
        className='absolute left-11 bottom-6 rounded-lg -rotate-3 opacity-0 peer-hover/linkedin:opacity-100 peer-hover/linkedin:bottom-8 transition-all'
      />
      <a
        href='https://dribbble.com/'
        target='_blank'
        className='text-white hover:opacity-75 peer/dribble'
      >
        Dribble
      </a>
      <Image
        src='/assets/logos/dribbble-logo.svg'
        width={40}
        height={40}
        alt='Dribbble logo'
        className='absolute right-2 bottom-6 rounded-lg rotate-3 opacity-0 peer-hover/dribble:opacity-100 peer-hover/dribble:bottom-8 transition-all'
      />
    </div>
  );
}
