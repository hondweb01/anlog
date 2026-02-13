"use client"
import { useEffect } from "react";
import { useState } from "react";

export default function hello(){
    const [data,setData] =useState({name:''});
    useEffect(()=>{
        fetch('/api-data/hello').then((res)=>res.json()).then((data)=>{setData(data)})
 
   
    },[])
    return <h1>Hello{data.name}</h1>
}