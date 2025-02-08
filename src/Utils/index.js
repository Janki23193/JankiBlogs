import {compareDesc, parseISO} from "date-fns"
//use this func to add multiple classes instead of parantheses  and Boolean will eleminate false values like empty string,null value
export const cx = (...classNames) => classNames.filter(Boolean).join(" ")

//sorting blogs
export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a , b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),) 
}