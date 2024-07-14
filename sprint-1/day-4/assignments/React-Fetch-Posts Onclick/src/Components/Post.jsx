import React from "react";
import { useState } from "react";
const Post = (props) => {
  // const [data,setData] = useState(fetchedData);
  // console.log(fetchedData)
  return (
    <div className="post" key={props.index}>
      <h1>{props.title}</h1>
      <h3>{props.body}</h3>
    </div>
  );
};

export default Post;
