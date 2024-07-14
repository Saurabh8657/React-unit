import React, { useState } from "react";
import { PostType } from "../types/types";
import { addPost } from "../api";
import { Navbar } from "../Components/Navbar";

const initialState = {
  name: "",
  author: "",
  image: "",
  content: "",
  category: "",
  like: 0,
  dislike: 0,
}

export const AddPost = () => {
  const [ post, setPost ] = useState<PostType>(initialState) ;
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() ;
    addPost(post)
  }
  return <>
    <Navbar page={false} />
    <form action="" onSubmit={(e)=>handleSubmit(e)} >
      <input type="text" className="post-name"
       placeholder="Post Name" 
       value={post.name}
       onChange={(e)=>{ console.log(post); setPost((prevPost)=>{ return {...prevPost,name:e.target.value} })}}
       />
      <input type="text" className="post-image"
       placeholder="Post Image" 
       value={post.image}
       onChange={(e)=>{setPost((prevPost)=>{ return {...prevPost,image:e.target.value} })}}
      />
      <input type="text" className="post-author"
       placeholder="Post Author" 
       value={post.author}
       onChange={(e)=>{setPost((prevPost)=>{ return {...prevPost,author:e.target.value} })}}
      />
      <input type="text" className="post-content"
       placeholder="Post Content" 
       value={post.content}
       onChange={(e)=>{setPost((prevPost)=>{ return {...prevPost,content:e.target.value} })}}
      />
      <select name="" id="" className="post-category"
        value={post.category}
        onChange={(e)=>{setPost((prevPost)=>{ return {...prevPost,category:e.target.value} })}}
      >
        <option value="">Select Category</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
        <option value="react">React</option>
      </select>

      <button className="submit-form" type="submit" >
        Add Post
      </button>
    </form>
  </>
};
// "Select Category" : value=""
// "HTML" : value="html"
// "CSS" : value="css"
// "JS" : value="js"
// "React" : value="react"