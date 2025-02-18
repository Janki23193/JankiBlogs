import { sortBlogs } from '@/src/Utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  
    const sortedBlogs = sortBlogs(blogs);
    return <section className='w-full mt-24 sm:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center'>
           <div className='flex w-full justify-between'>
           <h2 className='w-fit inline-block capitalize font-bold text-2xl md:text-4xl dark:text-light'>Recent Posts</h2>
             <Link href="/categories/all" className='inline-block font-medium underline underline-offset-2
              text-base md:text-lg dark:text-accentDark'>view all</Link>
           </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16'>
               {
                sortedBlogs.slice(4,11).map((blog, index)=>{
                    return <article className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog} />
                    </article>
                })
               }
           </div>
          </section>

}

export default RecentPosts