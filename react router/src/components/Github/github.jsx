import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data , setdata] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Honeyop007')
    //     .then((res)=>{ return res.json()})
    //     .then((data)=> {setdata(data)})
    //     .catch((error) => {
    //         setError(error.message);
    //       })
    // },[])
    const data = useLoaderData()
    return (
     <>
     <div className='m-4 p-4  bg-gray-300 '>
     <div className='bg-gray-400 text-white p-4 m-4 text-center text-3xl'>Github Followers: {data.followers}</div>
     <div className='relative  justify-center items-center flex  w-auto h-auto'>
        <img className='rounded-full shadow-lg' style={{border:'3px solid white'}} src={data.avatar_url} alt="My Image" />
     </div>
     <div className="text-3xl font-bold bg-gradient-to-r from-black/10 to-[rgba(5,25,55,0.9)] bg-clip-text text-transparent p-4 m-4 text-center">
  Name: {data.name}
</div>


     </div>
     </>   
    )
}

export default Github


export const githubinfo = async ()=>
{
    const res = await   fetch('https://api.github.com/users/Honeyop007')
    return res.json();
}