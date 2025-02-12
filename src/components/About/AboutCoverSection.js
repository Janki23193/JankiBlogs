import React from 'react'
import profileImg from '@/public/Profile_image.jpg' 
import Image from 'next/image'

const AboutCoverSection = () => {
  return (
    <section className='w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center 
    justify-center text-dark'>
        <div className='w-1/2 h-full border-r-2 border-solid border-dark flex justify-center'>
            <Image src={profileImg} alt="JankiBlogs"
            className = 'w-[30vh] h-full object-contain object-center'/>
        </div>
        <div className='w-1/2 flex flex-col text-left items-start justify-center px-16'>
          <h2 className='font-bold capitalize text-6xl'>
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