// contentlayer.config.js

import { makeSource, defineDocumentType} from 'contentlayer2/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from 'rehype-pretty-code'
import GithubSlugger from 'github-slugger'


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
      designation: {
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
        toc:{
          type: "json",
          resolve: async (doc) => {
            const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
            const slugger = new GithubSlugger();
            const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) => {
              const flag = groups?.flag;
              const content = groups?.content;
              return {
                level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                text: content,
                slug: content ? slugger.slug(content) : undefined
              }
            })
            return headings;
          },
        },
    },
  }));

  const codeOptions = {
    theme: "github-dark",
  }
export default makeSource({
  /* options */
  contentDirPath : "content",
  documentTypes : [Blog], 
  // downloaded remark for table display from mark down file  and rehype  for html tags and ids plugin
  // installed rehype- autolink- headings which can generated the id for particular html id so user can directly redirect to that section if we share that id
  // mdx: {remarkPlugins:[remarkGfm], rehypePlugins:[rehypeSlug, [rehypeAutolinkHeadings, {behaviour: "append"}]]}
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions]
    ],
  },

})