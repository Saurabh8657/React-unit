import { useEffect, useState } from "react";
import "./App.css";
import useWordCount from "./hooks/useWordCount";

function App() {
  const [inputText, setInputText] = useState("");
  const { text, wordCount } = useWordCount(inputText);
  
  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value) ;
  }
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <h1>Word Count: {wordCount}</h1>
      <input type="text" value={inputText} 
      onChange={(e)=> {
          handleChange(e) ;
        }  
      } 
      />
    </div>
  );
}

export default App;
