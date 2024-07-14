// export function useHook(url="link"){
//     let isError ;
//     let isLoading ;
//     let data ;
//     async function fetchData(){
//         try{
//             isLoading = true ;
//             let res = await fetch(`${url}`);
//              data = await res.json();
//             isLoading = false ;
//         }catch(error){
//             console.log(error) 
//              isError = error ;
//         }
//     }

//     return [ isLoading, isError, data ]

// }


// const [ isLoading, isError, data ] = useHook("link")