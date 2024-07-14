import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../Redux/action";

export default function Theme(){
    const themeValue = useSelector( store => store.theme.theme )
    // useDispatch(() => { return })
    const dispatch = useDispatch();
    return <>
        <button onClick={()=>dispatch({type:CHANGE_THEME, payload:'light'})}  disabled={ themeValue==="light" ? true : false}>
            Switch to Light
        </button>

        <button onClick={()=>dispatch({type:CHANGE_THEME, payload:'dark'})}   disabled={ themeValue==="dark" ? true : false} >
            Switch to Dark
        </button>
    </>;
}