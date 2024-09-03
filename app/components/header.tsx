import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <section className='flex w-full py-5 px-32' id='#'>
      <div className='relative flex flex-col items-center justify-center w-full rounded-3xl p-5 h-[40rem] bg-gradient-to-t from-[#0c0c0c] from-5% via-[#6C9A5A] via-40% to-[#ffffff] to-90% border border-neutral-200'>
        <div className='absolute h-auto inset-0 bg-[url(/assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,1))]'></div>
        <div className='relative flex flex-col w-[50%] items-center justify-center gap-6 z-3'>
          <h1 className='text-5xl font-semibold text-center'>
            The simple way <br /> encription your data
          </h1>
          <p className='font-normal'>
            Fully managed data encrypting and annotation platform for teams of
            all industries
          </p>
          <Link
            href='https://tailwindcss.com/docs/reusing-styles'
            target='_blank'
            className='bg-white text-[0c0c0c] px-7 py-3 flex items-center gap-2 rounded-3xl outline-none hover:scale-120 cursor-pointer z-5'
          >
            Book a consult
          </Link>
        </div>
      </div>
    </section>
  );
}
