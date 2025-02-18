import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Elements/Tag'
import { format } from 'date-fns'

const BlogLayoutThree = ({blog}) => {
  return (
    <div className='group flex flex-col items-center text-dark dark:text-light'>
       <Link href={blog.url} className='h-full rounded-xl overflow-hidden'>
         <Image src={blog.image.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width= {blog.image.width}
            height={blog.image.height}
            className='aspect-[4/3] w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all 
            ease duration-300'
            sizes="(max-width: 640px) 100vw (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
        <div className='flex flex-col w-full mt-4'>
                <span className='uppercase text-cyan-950 dark:text-accentDark font-semibold text-xs sm:text-sm mr-2'>{blog.tags[0]}</span>
               <Link href={blog.url} className='inline-block my-1 mr-2'> 
                    <h2 className='font-semibold capitalize text-base sm:text-lg'>
                      <span className='bg-gradient-to-r from-slate-600/50 to-slate-600/50 dark:from-accentDark/50
                      dark:to-accentDark bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom 
                      bg-no-repeat transition-[background-size] duration-500'>
                        {blog.title}
                      </span>
                  </h2>
               </Link>
               <span className='capitalize text-dark/50 dark:text-light font-semibold, text-sm sm:text-base'>
                {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
               </span>
            </div>
    </div>
  )
}

export default BlogLayoutThree