'use client'
import { useEffect, useState } from "react"
import Toggle from 'react-toggle';

export default function Theme(){
    const [isDark, setDarkMode] = useState(true)
    
    useEffect(() =>{
            if(isDark){
                document.body.classList.add('bi-moon')
            }else{
                document.body.classList.remove('bi-moon')
            }
    }, [isDark])

    return(
        
    )
}