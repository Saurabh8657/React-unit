import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { PostList } from "../Components/PostList";
import { getPosts } from "../api";
import { PostType, fetchedPost } from "../types/types";

export const HomePage = () => {
  const [ postList, setPostList ] = useState<fetchedPost[]>([]) ;
  useEffect( ()=>{
    getPosts()
    .then( res => {
      setPostList(res) ;
    } )
  },[] )
  return (
    <div>
      <Navbar page={true} />
      <PostList postList={postList} setPostList={setPostList} />
    </div>
  );
};
