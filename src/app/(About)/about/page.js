import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export default function About(){
    return <>
    <AboutCoverSection/>
    <Skills/>
    <h2 className="mt-8 font-semibold text-2xl mx-20 text dark self-start">
        "Turn your business idea into reality" Want to discuss the Project which thrives your business ? Reach out to me jankirawal93@gmail.com <Link href="/contact" className="!underline underline-offset-2">Here</Link>
    </h2>
    </>
}