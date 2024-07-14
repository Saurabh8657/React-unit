import React, { useCallback, useMemo, useState } from 'react';

const Post = ({item}) => {
  const [verifyPost, setVerifyPost] = useState(item.verifyPost);

  const handleToggleStatus = () => {
    console.log("clicked")
    setVerifyPost(prevVerifyPost => !prevVerifyPost);
  };

  const displayVerified = useCallback( ()=>{
    return ( verifyPost ? "Verified" : "Verify" )
  },[verifyPost] ) 
  
  return (
    <div data-testid="post" style={{ backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`  }}>
      <div>
        {/* add title in below h6 and body in P tag */}
        <h6>{item.title}</h6>
        <p>{item.body}</p>
      </div>
      {/* The default textContent of button should be  "Verify" and other textContent should be changed to "Verified" and vice-versa */}
      <button data-testid="verify_btn" onClick={handleToggleStatus} >{displayVerified()}</button>
    </div>
  );
};
export default Post ;
