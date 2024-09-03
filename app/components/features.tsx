import React from "react";
import Image from "next/image";

function Features() {
  return (
    <section
      className='flex flex-col justify-center items-center w-full gap-8 py-10'
      id='features'
    >
      <div className='flex flex-col justify-center items-center gap-2 '>
        <h2 className='text-4xl font-semibold'>Features</h2>
        <p className='text-zinc-400'>
          How our product elevates your DevOps experience
        </p>
      </div>
      <div className='bg-gradient-radial from-[#6c9a5ac6] from-10% via-[#6C9A5A] via-20% to-transparent to-40%'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col justify-center items-center col-span-2 bg-white/70 backdrop-blur-xl rounded-xl border border-[#6c9a5a32] overflow-hidden p-4 gap-4 '>
            <Image
              src='/assets/features/feature1.webp'
              width={350}
              height={120}
              alt='Feature1'
              style={{ marginTop: "-5rem", borderRadius: "1rem" }}
            />
            <div className='flex flex-col items-center justify-center w-[70%] text-center'>
              <h5 className='text-xl font-semibold'>Automated Workflows</h5>
              <p className=' text-zinc-600'>
                Streamline your DevOps processes with automated workflows that
                reduce manual intervention.
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center col-span-1 bg-white/70 backdrop-blur-xl rounded-xl border border-[#6c9a5a32] overflow-hidden p-4 gap-4'>
            <Image
              src='/assets/features/feature2.webp'
              width={550}
              height={170}
              alt='Feature1'
              style={{ marginTop: "-5rem", borderRadius: "1rem" }}
            />
            <div className='flex flex-col items-center justify-center text-center'>
              <h5 className='text-xl font-semibold'>
                Real-Time Incident Detection
              </h5>
              <p className=' text-zinc-600'>
                Stay ahead of issues with our real-time incident detection
                system.
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center col-span-1 bg-white/70 backdrop-blur-xl rounded-xl border border-[#6c9a5a32] overflow-hidden p-4 gap-4'>
            <Image
              src='/assets/features/feature2.webp'
              width={350}
              height={120}
              alt='Feature1'
              style={{ marginTop: "-5rem", borderRadius: "1rem" }}
            />
            <div className='flex flex-col items-center justify-center text-center'>
              <h5 className='text-xl font-semibold'>
                Collaborative Incident Response
              </h5>
              <p className='text-zinc-600'>
                Empower your team with tools designed for collaborative incident
                response.
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center col-span-2 bg-white/70 backdrop-blur-xl rounded-xl border border-[#6c9a5a32] overflow-hidden p-4 gap-4 text-center'>
            <Image
              src='/assets/features/feature3.png'
              width={550}
              height={120}
              alt='Feature1'
              style={{ marginTop: "-5rem", borderRadius: "1rem" }}
            />
            <div className='flex flex-col items-center justify-center w-[70%]'>
              <h5 className='text-xl font-semibold'>
                Comprehensive Monitoring and Analytics
              </h5>
              <p className=' text-zinc-600'>
                Gain deep insights into your system’s performance with
                comprehensive monitoring and analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
