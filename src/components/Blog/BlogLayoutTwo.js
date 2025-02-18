import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Elements/Tag'
import { format } from 'date-fns'

const BlogLayoutTwo = ({blog}) => {
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark dark:text-light'>
       <Link href={blog.url} className='col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden'>
         <Image src={blog.image.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width= {blog.image.width}
            height={blog.image.height}
            sizes="(max-width: 640px) 100vw (max-width: 1024px) 50vw, 33vw"
            className='aspect-square w-full h-full object-center object-cover rounded-xlgroup-hover:scale-105 transition-all 
            ease duration-300' />
        </Link>
        <div className='col-span-12 lg:col-span-8 w-full'>
                <span className='inline-block w-full uppercase text-cyan-950 dark:text-accentDark font-semibold text-xs sm:text-sm mr-2'>
                  {blog.tags[0]}
                </span>
               <Link href={blog.url} className='inline-block my-1 mr-2'> 
                    <h2 className='font-semibold capitalize text-base sm:text-lg'>
                      <span className='bg-gradient-to-r from-slate-600/50 to-slate-600/50 dark:from-accentDark/50 dark:to-accentDark/50
                      bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
                      transition-[background-size] duration-500'>
                        {blog.title}
                      </span>
                  </h2>
               </Link>
               <span className='inline-block w-full capitalize text-dark/50 dark:text-light/50 font-semibold, text-xs sm:text-base'>
                {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
               </span>
            </div>
    </div>
  )
}

export default BlogLayoutTwo