import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetaData, { description } from "@/src/Utils/siteMetadata";

export const metadata ={
    title: "Contact Me",
    description: `Contact me through this available form or email me at ${siteMetaData.email}`
}
export default function contact(){
    return (<section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center
     text-dark dark:text-light">
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-dark dark:border-light border-solid"><LottieAnimation/></div>
        <div className="w-full md:w-3/5 flex flex-col md:items-start justify-center px-5 xs:px-10 md:px-24 pb-18">
         <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl capitalize">let's talk</h2>
         <ContactForm/>
        </div>
     </section>
    )
}