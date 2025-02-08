"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'

const mdxComponents = {
    Image
}
const RenderMdx = ({blog}) => {
    const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div className='col-span-8 font-in prose prose-lg max-w-max
    prose-blockquote:bg-orange-400/20
      prose-blockquote:p-2
      prose-blockquote:px-6
      prose-blockquote:border-red-950
      prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg
      prose-li:marker:text-fuchsia-600'>
        <MDXContent components = {mdxComponents}/>
    </div> 
  )
}

export default RenderMdx