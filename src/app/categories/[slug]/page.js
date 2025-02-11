import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";
import { postcss } from "tailwindcss";

const slugger = new GithubSlugger();
export async function generateFunction(){
    const categories = [];
    const paths = [{slug : "all"}]
    
    allBlogs.map(blog => {
        if(blog.isPublished){
            blog.tags.map(tag => {
                let slugified = slugger.slug(tag);
                if(!categories.includes(slugified)){
                    categories.push(slugified);
                    paths.push({slug: slugified})
                }
            })
        }
    })
    return paths;
}

export default async function CategoryPage({params}){
    const paramsAwaited = (await params)
    const allCategories = ["all"]; // crated array for all the categories
    const blogs = allBlogs.filter((blog) =>{ // filter each blog
      return blog.tags.some(tag => { // filter each tag
        const slugified = slug(tag); // slugify the tag using github sluggifier
        if(!allCategories.includes(slugified)){ // if sluggified tag is not added in allcategories then we push sluggified tags
            allCategories.push(slugified)
        }
        if(paramsAwaited.slug === 'all'){ // if params = all then return true
            return true;
        }
        return slugified === paramsAwaited.slug // otherwise return particular slug
      })
    })
    return <article className="mt-12 flex flex-col text-dark">
       
        <div className="px-32 flex flex-col"> 
            <h1 className="mt-6 font-semibold text-5xl">
                #{paramsAwaited.slug}
            </h1>
            <span className="mt-2 inline-block">Discover more Categories and expand your knowledge!</span>
        </div>
        <Categories categories = {allCategories} currentSlug= {paramsAwaited.slug}/>
        <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
           { blogs.map((blog,index) =>(
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog}/>
            </article>
           ))
          }
        </div>
    </article> 
}
