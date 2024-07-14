import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {
  const[posts,setPosts] = useState([]) ;
  const fetchRequest = async()=>{
    try{
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`) ;
      let data = await response.json();
      console.log(data) ;
      setPosts(data) ;
    }catch(error){
      console.log(error) ;
    }
  }
  return (
    <div className="App" data-testid="app">
      <button id="get-posts-btn" className="App-link" onClick={()=>{ fetchRequest() }}> GET POSTS </button>
      <div id="post-container">
        {posts.map( (item,index)=> 
            <Post key={index} title={item.title} body={item.body} />
         )}
        {/*  map through the posts data and pass props to the Posts component */}
      </div>
    </div>
  );
}

export default App;
