"use client"
import "./index.css";
import NavBar from "@/components/NavBar";
import Head from "next/head"
import { useEffect } from "react";
import { useState } from "react";
export default function Dashboard() {

    
    const [urlSelected, setUrlSelected] = useState(0);

    useEffect(()=>{
        document.getElementById(`b-${urlSelected}`).classList.replace("bg-transparent","bg-gray-300");
    },[urlSelected])

    let urls = [{
        direct: "https://www.youtube.com",
        clicks: 0
    },
    {
        direct: "https://www.taringa.com",
        clicks: 5
    },
    {
        direct: "https://www.google.com",
        clicks: 3
    },
    {
        direct: "https://www.twitter.com",
        clicks: 18
    },
]

    function changeStyle(){
        urls.map((el,index)=>{
            document.getElementById(`b-${index}`).classList.replace("bg-gray-300", "bg-transparent");
        })
    }
    
  return (
    <main className='bg-white h-screen text-black'>
    <Head>
        <title>Dashboard - EzLink</title>
    </Head>
    <NavBar></NavBar>
    <div className="grid place-items-center md:flex">
    <div className=" md:border-r-2 border-t-2 mt-10 md:border-t-0 border-gray-300 px-5 py-5 mr-10 order-last md:order-0">
        <h1 className="text-center text-3xl mb-10 font-bold">Your URLS:</h1>
        <ul>
            {urls.map((el,index)=>{
                return <button id = {`b-${index}`} onClick={()=>{
                    changeStyle();
                    setUrlSelected(index)
                }} className="bg-transparent duration-300 p-2 hover:bg-gray-300 hover:duration-300 block"><li>{el.direct}</li></button>
            })}
            
        </ul>
    </div>
    <div className='pt-10 items-center order-0 md:order-last'>
        <h1 className='md:text-center text-6xl font-bold'>Dashboard</h1>
        <h2 className="mt-2">{urls[urlSelected].direct}</h2>
        <h2 className="mt-10 text-2xl">Number of clicks: {urls[urlSelected].clicks}</h2>
    </div>
    </div>
    </main>
  )
}
