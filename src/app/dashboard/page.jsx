"use client"
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const page = () => {
    const data=useSession()
    
    return (
        <div>
            <h3>Name:{data.data?.user?.name}</h3>
            <h3>Email:{data.data?.user?.email}</h3>
            <button onClick={()=>signOut()} className='btn btn-primary'>sign out</button>
        </div>
    );
};

export default page;