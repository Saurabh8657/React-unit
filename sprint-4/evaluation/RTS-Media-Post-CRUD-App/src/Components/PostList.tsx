import React, { useState } from "react";
import { PostType, fetchedPost } from "../types/types";
import { PostCard } from "./PostCard";

type SetPostListType = (a: fetchedPost[]) => void;
type PostListPropType = {
  postList: fetchedPost[] ;
  setPostList: SetPostListType
}
export const PostList = ({postList,setPostList}:PostListPropType) => {

  return <div data-testid="post-list">
    {
      postList?.map( (item,index) => {
        return <PostCard key={index} item={item} setPostList={setPostList} />
      } )
    }
  </div>;
};
