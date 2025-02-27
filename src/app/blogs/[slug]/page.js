import { allBlogs } from "contentlayer/generated"
import Tag from "@/src/components/Elements/Tag"
import Image from "next/image"
import BlogDetails from "@/src/components/Blog/BlogDetails"
import RenderMdx from "@/src/components/Blog/RenderMdx"
import { slug } from "github-slugger"
import siteMetaData, { description } from "@/src/Utils/siteMetadata"
import Link from "next/link"
import profileImg from "@/public/janki1.jpeg"

// for dynamic metadata
export async function generateMetadata({ params }) {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
    if(!blog){
        return ;
    }
    const publishedAt = new Date(blog.publishedAt).toISOString();
    const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

    let imageList = [siteMetaData.socialBanner];
    if(blog.image){
        imageList = typeof blog.image.filePath === "string" ?
         [siteMetaData.siteURL + blog.image.filePath.replace("/public", "")] : blog.image
    }
    const ogImages = imageList.map(img => {
        return {url: img.includes("http") ? img : siteMetaData.siteURL + img}
    })
    //add authors in SEO
    const authors = blog?.author ? blog.author : siteMetaData.author
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: 'The React Framework for the Web',
        url: siteMetaData.siteURL + blog.url,
        siteName: siteMetaData.title,
        locale: 'en_US',
        type: 'article',
        publishedTime: publishedAt,
        modifiedAt:modifiedAt,
        images: ogImages,
        authors: authors.length > 0 ? authors : siteMetaData.author
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description,
        images: ogImages, // Must be an absolute URL
      },
    }   
}
export async function generateFunction(){
    return allBlogs.find((blog) => ({slug: blog._raw.flattenedPath}))
}
export default async function BlogPage({ params }) {
    const slugg = (await params).slug
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slugg)
    // const slug = (await params).slug
    return <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
            <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2">
                <Tag name={blog.tags[0]} link={`/categories/${slug(blog.tags[0])}`}
                className='px-6 text-sm py-2 text-light'/>
                <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl 
                leading-normal\relative w-5/6">
                   {blog.title}
                </h1>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
              <Image src={blog.image.filePath.replace("../public", "")}
                          placeholder='blur'
                          blurDataURL={blog.image.blurhashDataUrl}
                          alt={blog.title}
                          width= {blog.image.width}
                          height={blog.image.height}
                          className='aspect-square w-full h-full object-center object-cover' />
            </div>
            <BlogDetails blog={blog} slug={slugg}/>
            <Link href="/" className='flex items-center text-dark dark:text-light'>
                    <div className='md:w-16 w-12 rounded-full overflow-hidden border border-solid border-dark dark:border-light 
                    mr-2 md:mr-4 ml-4 sm:ml-10 md:ml-10 mt-1 '> 
                        <Image src="/janki1.jpeg" alt="Blogs" className='fill w-full h-10 sm:h-16 md:h-16 rounded-full' sizes='33vw' priority/>
                       
                    </div>
                     <div className="flex flex-col">
                        <span className='font-normal dark:font-semibold text-sm md:text-xl'>{blog.author}</span>
                        <span className='font-normal dark:font-semibold text-sm md:text-sm'>{blog.designation}</span>
                    </div>
               </Link>
            <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
               <div className="col-span-12 lg:col-span-4">
                 <details className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light p-4 top-6 rounded-lg
                 sticky max-h-[80vh] overflow-hidden overflow-y-auto" open>
                    <summary className="text-lg font-semibold capitalize cursor-pointer">Table Of Content</summary>
                    <ul className="mt-4 font-in text-base">
                        {
                            blog.toc.map((heading)=>{
                                return <li key={`#${heading.slug}`} className="py-1">
                                    <a href = {`#${heading.slug}`}
                                        data-level = {heading.level}
                                        className="data-[level=two]:pl-0  data-[level=two]:pt-2 data-[level-two]:border-t border-solid border-dark/40
                                            data-[level=three]:pl-4
                                            sm:data-[level=three]:pl-6
                                             flex items-center justify-start
                                            ">
                                             {
                                                heading.level === "three" ? <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span>: null
                                             }   
                                      <span>{heading.text}</span>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                 </details>
               </div>
               <RenderMdx blog={blog}/>
            </div>
    </article>
  }