import React from 'react'
import Category from './category'
import { slug } from 'github-slugger'

const Categories = ({categories, currentSlug}) => {
  return (
    <div className='px-0 sm:px-10 sxl:px-20 mt-10 border-t-2 border-b-2 text-dark dark:text-light border-solid
     border-dark dark:border-light py-4 flex items-start
    flex-wrap font-medium mx-5 md:mx-10'>
        {
            categories.map(cat => <Category key={cat} link={`/categories/${cat}`}
            name={cat}
            active = {currentSlug === slug(cat)}
            />   )
        }
    </div>
  )
}

export default Categories