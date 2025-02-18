"use client"
import { useEffect, useState } from "react"

export function useThemeSwitch(){
    const preferDarkQuery = "(prefers-color-schema:dark)"
    const storageKey = 'theme'

    const toggleTheme = (theme) => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }
        else{
            document.documentElement.classList.remove("dark")
        }
        window.localStorage.setItem(storageKey, theme)
    }
    const getUserPreference = () =>{
        const userPref = window.localStorage.getItem(storageKey);
        if(userPref){
           return userPref;
        }
        return window,matchMedia(preferDarkQuery).matches ? "dark" : "light" 
    }
    const [mode, setMode] = useState("dark")

    useEffect(()=>{
        const mediaquery = window.matchMedia(preferDarkQuery);
        const handlechange = () =>{
            const newMode = getUserPreference();
            setMode(newMode)
            toggleTheme(newMode)
        }    
        handlechange();
        mediaquery.addEventListener("change", handlechange);
        return () =>{
            mediaquery.removeEventListener("change", handlechange);
        }
    }, [])
    useEffect(()=>{
      toggleTheme(mode)
    }, [mode])
    return[mode, setMode] 
}

