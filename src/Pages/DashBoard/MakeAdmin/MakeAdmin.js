import React from "react";
import { toast } from "react-toastify";

const MakeAdmin =({user,refetch})=>{
    const{email,role} = user;
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            }
        })
        .then(res=>
          
            // {   if(res.status === 403){
            //     toast.error('Failed to create Admin')
            // }
                res.json())
        .then(data=>{
          if(data?.modifiedCount === 1){
            console.log(data)
            refetch()
            toast.success('Successfully made an admin')
           
          }
          else{
            toast.error('nothing')
          }
        console.log(data)

        })
    }
    return(
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !=='admin'&& <button  class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
        <td><button class="btn btn-xs">X</button></td>
      </tr>
    )
}

export default MakeAdmin;