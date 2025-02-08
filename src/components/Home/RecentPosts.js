import { sortBlogs } from '@/src/Utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';
import Link from 'next/link';
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({ blogs }) => {
  
    const sortedBlogs = sortBlogs(blogs);
    return <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
           <div className='flex w-full justify-between'>
             <h1 className='inline-block capitalize font-bold text-4xl'>Recent Posts</h1> 
             <Link href="/categories/all" className='inline-block font-medium underline underline-offset-2
              text-lg'>view all</Link>
           </div>
           <div className='grid grid-cols-3 grid-rows-2 gap-16 mt-16'>
               {
                sortedBlogs.slice(0,4).map((blog, index)=>{
                    return <article className='col-span-1 row-span-1 relative'>
                        <BlogLayoutThree blog={blog} />
                    </article>
                })
               }
           </div>
          </section>

}

export default RecentPosts