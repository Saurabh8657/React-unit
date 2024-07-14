import axios from "axios";

export const postTasks = async ( task: string ) => {
    let res = await axios.post(`http://localhost:8080/todos`,{
        task: task,
        status: false 
    }) ;
    return res ;
}
export const getTasks = async ( ) => {
    let res = await axios.get(`http://localhost:8080/todos`) ;
    return res ;
}
export const togglePatchRequest = async (  id: string, status: boolean ) => {
    let res = await axios.patch(`http://localhost:8080/todos/${id}`,{
        status: !status
    }) ;
    return res ;
}
export const deleRequest = async (  id: string ) => {
    let res = await axios.delete(`http://localhost:8080/todos/${id}`) ;
    return res ;
}