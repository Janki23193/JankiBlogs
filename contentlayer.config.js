// contentlayer.config.js

import plugin from '@tailwindcss/forms'
import { makeSource, defineDocumentType} from 'contentlayer2/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "**/**/*.mdx",
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      publishedAt: {
        type: "date",
        required: true,
      },
      updatedAt: {
        type: "date",
        required: true,
      },
      description: {
       type: "string",
       required: true,
      },
      image: {
        type: "image"
      },
      isPublished: {
        type: "boolean",
        required: true,
      },
      author: {
        type: "string",
        required: true,
      },
      tags: {
        type: "list",
        of: { type: "string" },
      },
    },
    computedFields: {
        url: {
          type: "string",
          resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
        readingTime:{
          type: "json",
          resolve: (doc) => readingTime(doc.body.raw),
        },
    },
   }))
export default makeSource({
  /* options */
  contentDirPath : "content",
  documentTypes : [Blog], 
  // downloaded remark for table display from mark down file  and rehype  for html tags and ids plugin
  // installed rehype- autolink- headings which can generated the id for particular html id so user can directly redirect to that section if we share that id
  mdx: {remarkPlugins:[remarkGfm], rehypePlugins:[rehypeSlug, rehypeAutolinkHeadings, {behaviour: "append"}]}
})