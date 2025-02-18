import React from 'react'
import profileImg from '@/public/Profile_image.jpg' 
import Image from 'next/image'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center 
    justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'>
            <Image src={profileImg} alt="JankiBlogs"
            className = 'w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw (max-width: 1180px) 50vw, 50vw"/>
        </div>
        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-4 pb-10 lg:px-16'>
          <h2 className='font-bold capitalize text-3xl xs:text-5xl sxl:text-6xl text-center lg:text-left'>
            Dream Big, Start small, Achieve Big
          </h2>
          <p className='font-medium capitalize mt-4 text-base'>
            This is the Mantra for success. I work as a Full stack developer in NZ, Completed Masters from India 
            and Graduate Diploma in Software Engineering in NZ
          </p>
        </div>
    </section>
  )
}

export default AboutCoverSection