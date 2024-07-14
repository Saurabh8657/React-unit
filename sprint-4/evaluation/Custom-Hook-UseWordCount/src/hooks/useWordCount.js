import { useState, useEffect } from "react";

const useWordCount = (initialText = "") => {
    const [text, setText] = useState(initialText);
    const [wordCount, setWordCount] = useState(0);
    useEffect(() => {
      const words = text.trim().split(" ");
      setWordCount(words.length);
    }, [text]);
    return { text, wordCount };
};
export default useWordCount;

// const useWordCount = (inputText = "") => {
//     const [text, setText] = useState(inputText);
//     function wordCount(abc=''){
//       return abc.trim().split(" ").length ;
//     }
//     return { text, wordCount };
// };
// export default useWordCount;
