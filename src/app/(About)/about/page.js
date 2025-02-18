import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata ={
    title: "About Me",
    description: "Here are the details about me"
}
export default function About(){
    return <>
    <AboutCoverSection/>
    <Skills/>
    <h2 className="mt-8 font-semibold text-lg md:text-2xl mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text dark self-start dark:text-light">
        "Turn your business idea into reality" Want to discuss the Project which thrives your business ? Reach out to me jankirawal93@gmail.com <Link href="/contact" className="!underline underline-offset-2">Here</Link>
    </h2>
    </>
}