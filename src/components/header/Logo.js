import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from "@/public/Profile_image.jpg"

const logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
      <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'> 
         <Image src={profileImg} alt="Blogs" className='w-full h-auto rounded-full'/>
      </div>
      <span className='font-bold text-xl'>codeBlogs</span>
    </Link>
  )
}

export default logo