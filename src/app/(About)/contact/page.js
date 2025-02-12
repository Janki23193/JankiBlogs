import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";


export default function contact(){
    return (<section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center
     text-dark">
        <div className="inline-block w-2/5 h-full border-r-2 border-dark border-solid"><LottieAnimation/></div>
        <div className="w-3/5 flex flex-col items-start justify-center px-24 pb-18">
         <h2 className="font-bold text-4xl capitalize">let's talk</h2>
         <ContactForm/>
        </div>
     </section>
    )
}