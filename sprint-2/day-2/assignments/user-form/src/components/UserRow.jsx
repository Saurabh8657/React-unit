import React from "react"
function UserRow (props){
    const {name,gender,role,maritalStatus} = props.item ;
    const id = props.index ;
    return <tr  >
            <td> {id+1} </td>
            <td> {name} </td>
            <td> {gender} </td>
            <td> {role} </td>
            <td> {maritalStatus ? "married":"unmarried"} </td>
        </tr>
}
export {UserRow}