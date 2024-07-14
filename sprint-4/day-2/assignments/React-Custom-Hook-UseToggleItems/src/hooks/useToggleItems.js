import { useState } from "react";
const useToggleItems = (initialArr,initialPosition=0) => {
    const [ position, setPostiion ] = useState(initialPosition); ;

    function togglePosition(){
        setPostiion( prevPosition => ( (prevPosition + 1) % initialArr.length ) ) ;
    }
    return [ initialArr[position], togglePosition ]
};

export { useToggleItems };
