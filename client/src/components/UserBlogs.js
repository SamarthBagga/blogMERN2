import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Blog from './Blogs'; 


const UserBlogs = () => {
  const [user,setUser]=useState()
  const id=localStorage.getItem("userId");
  const sendRequest=async()=>{
    const res=await axios.get(`https://blog-app-23.onrender.com/api/blog/user/${id}`).catch(err=>console.log(err))
    const data=await res.data;
    return data
  }
  useEffect(()=>{
    sendRequest().then((data)=>setUser(data.user));
  },[])
  console.log(user);
  return (
    <div>{user && user.blogs && user.blogs.map((blog,index)=>(
      <Blog 
      isUser={true}
      key={index} title={blog.title} description={blog.description} imageURL={blog.image} userName={blog.user.name}/>
    ))}</div>
  )
}

export default UserBlogs