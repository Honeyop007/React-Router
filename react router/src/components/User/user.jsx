import React from 'react'
import { useParams } from 'react-router-dom' 

function User() {
    const {userid} = useParams()
    return (
        <h1 className='flex font-bold p-12 bg-gray-500 justify-center text-3xl text-white'>User: {userid} </h1>
    )
}

export default User
