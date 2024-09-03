"use client";

import React from "react";
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className='flex flex-col gap-10 w-full bg-[#0c0c0c] p-[4rem]'>
      <div className='flex flex-col gap-5'>
        <div>
          <h2 className='text-white text-2xl w-2/5'>
            The website that will save your team time and money is just a few
            clicks away.
          </h2>
          <h2 className='text-white text-xl'>Ready to get started?</h2>
        </div>

        <div className='flex gap-6'>
          <Link
            href='#contact'
            className='group relative bg-[#7c7c7c] text-white px-7 py-3 flex items-center gap-2 rounded-2xl outline-none active:scale-110 transition cursor-pointer'
          >
            Get in touch
            <motion.p className='text-4xl absolute -right-2 opacity-0 group-hover:-right-1 group-hover:opacity-100 transition-all duration-300'>
              📞
            </motion.p>
          </Link>

          <Link
            href='#contact'
            className='group relative bg-white text-[0c0c0c] px-7 py-3 flex items-center gap-2 rounded-2xl outline-none active:scale-110 transition cursor-pointer'
          >
            Book a consult
            <motion.p className='text-4xl absolute right-4 top-0 -z-3 opacity-0 group-hover:opacity-100 group-hover:-top-[2.35rem] transition-all duration-300'>
              🙌
            </motion.p>
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between'>
          <a href='mailto:dardan.dara@gmail.com' className='text-white'>
            dardan.dara@gmail.com
          </a>
          <div>
            <SocialIcons />
          </div>
        </div>
        <div className='flex justify-between text-white text-sm'>
          <p>(C) Dardan Dara year 2024 - All rights reserved</p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
