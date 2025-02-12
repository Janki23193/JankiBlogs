'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'
const supabase = createClientComponentClient();
const ViewCounter = ({slug, noCount=false, showCount=true}) => {
    const [views, setViews] = useState(0);
    useEffect(()=>{
      const incrementView = async () =>{
        try{
              
            let { data, error } = await supabase
            .rpc('increment', {
            slug_text: slug,
            })
            if (error) {
              console.error("Error incrementing view count inside try block:", error);  
            }
            else console.log(data)

        }catch(error){
              console.error("An error occured while creating the view count", error)
        }
      }
      if(!noCount){
        incrementView();
      }
    }, [slug, noCount])
    
    if(showCount){
        return (
        <div>{views} Views</div>
    )}
    else{
        return null;
    }
  
}

export default ViewCounter