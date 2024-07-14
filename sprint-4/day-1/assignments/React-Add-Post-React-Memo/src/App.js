import "./App.css";
import React, {  useCallback, useMemo, useState } from "react";
import Post from "./components/Post";

const initialPost ={
	id:"",
	title:"",
	body:"",
	verifyPost: false
 }
function App() {
	const [ timer, setTimer ] = useState(0)
	const [ posts, setPosts ] = useState(initialPost);
	const [ postList, setPostList ] = useState([]);
	
	useState( ()=>{
		const interval = setInterval( ()=>{
			setTimer( prev => prev + 1) ;
		},1000 )
		return () => clearInterval( interval )
 	},[] );
 
	const handleSubmit = () => {
		setPostList([...postList, posts]);
	}

	const postComponents = useMemo(() => {
		return postList.map( (item,index) =>  
			<Post key={index} item={item} /> 
		)
	},[postList]) ;


	return (
		<div className="App" data-testid="app">
			<div data-testid="timer">
				Timer:{timer}
				{/* Add timer here, refer to image in prolblem statement*/}
			</div>
			<div>
				{/* Below is the input tag for title */}
				<input placeholder="Enter post title" 
					data-testid="title-input" 
					value={posts.title}
					onChange={(e) => setPosts({ ...posts, title: e.target.value })}
				/>
				<br />
				{/* Below is the textarea tag for body */}
				<textarea
					placeholder="Enter post body"
					data-testid="post-input"
					value={posts.body}
					onChange={(e) => setPosts({ ...posts, body: e.target.value })}
				></textarea>
				<br />
				<button data-testid="add-post-button" onClick={() => handleSubmit()}>Add Post</button>
			</div>

			<hr />
			<h1>Posts</h1>
			<div data-testid="posts-container">
				{postComponents} 
				{/* { postList.map( (item,index) => <Post key={index} item={item} />) } */}
				{/* map your posts with the Post Component and pass the required props */}
			</div>
		</div>
	);
}

export default App;
