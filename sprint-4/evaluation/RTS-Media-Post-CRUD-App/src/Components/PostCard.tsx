import React, { useState } from "react";
import { PostType, fetchedPost } from "../types/types";
import { deleteProduct, updateDisLike, updateLike } from "../api";

type SetPostListType = (a: fetchedPost[]) => void;

type PostCardPropType = {
  item: fetchedPost
  setPostList: SetPostListType
};



export const PostCard = ({ item, setPostList }: PostCardPropType) => {

  const [likeCount, setLikeCount] = useState(item.like);
  const [dislikeCount, setDislikeCount] = useState(item.dislike);

  const handleUpdateLike = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setLikeCount(likeCount + 1);
    const updatedPost = { ...item, like: item.like++ };
    updateLike(updatedPost) ;
  }
  const handleUpdateDislike = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    setDislikeCount(dislikeCount + 1);
    const updatedPost = { ...item, dislike: item.dislike++ };
    updateDisLike(updatedPost) ;
  }

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    deleteProduct(item.id) ;
    // setPostList( (prev) => {
    //     prev.filter((post:PostType) => (post.name === item.name ? false : true))
    //   }
    // );

  }

  
  return <div className="post-card">
    <img src={item.image} alt={item.name} className="post-image" />
    <p className="post-name">{item.name}</p>
    <p className="post-author">Author: {item.author}</p>
    <p className="post-content">{item.content}</p>
    <p className="post-category">Category: {item.category}</p>
    <button data-testid="like-button" 
      onClick={(e)=>{handleUpdateLike(e)}} 
    >
      Like
    </button>
    <span className="post-like">{item.like}</span>
    <button data-testid="dislike-button"
      onClick={(e)=>{handleUpdateDislike(e)}} 
    >
      Dislike
    </button>
    <span className="post-dislike">{item.dislike}</span>
    <button data-testid="dislike-button"
       onClick={(e)=>{handleDelete(e)}} 
    >Delete</button>
  </div>;
};

