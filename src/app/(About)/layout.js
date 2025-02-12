import InsightRoll from "@/src/components/About/InsightRoll";
import { Children } from "react";
const insights = [
    "5+ projects delivered",
    "3+ years of Full stack developer experience",
    "Experience in Azure Cloud Computing",
    "Done Masters, Graduate Diploma in Software Engineering with A++ result"
    ]
export default function AboutLayout ({children}){
    return(
        <main className="w-full flex flex-col items-center justify-between">
            <div><InsightRoll insights = {insights}/></div>
            {children}
        </main>
    )
}