import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import MakeAdmin from "./MakeAdmin";

const Users = ()=>{
    const {data:users, isLoading,refetch} = useQuery('users',()=>fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=>res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return(
        <div>
        
        <h2>All Users{users?.length}</h2>
        <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
        {
            users.map(user=><MakeAdmin user={user} key={user._id} refetch={refetch}></MakeAdmin>)
        }
    
    </tbody>
  </table>
</div>
        </div>
    )
}

export default Users;