import React from "react";
import { companyLogos } from "@/lib/data";
import Image from "next/image";

function ClientsSlider() {
  return (
    <section id='clients' className='flex flex-col gap-5 max-w-full'>
      <div className='flex flex-col justify-center items-center gap-2 '>
        <p className='text-zinc-400'>Companies that' trust us</p>
      </div>
      <div className='inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll'>
          {companyLogos.map((logo) => {
            return (
              <li key={logo.id}>
                <Image src={logo.src} alt={logo.alt} width={100} height={50} />
              </li>
            );
          })}
        </ul>
        <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll aria-hidden="true"'>
          {companyLogos.map((logo) => {
            return (
              <li key={logo.id}>
                <Image src={logo.src} alt={logo.alt} width={100} height={50} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ClientsSlider;
