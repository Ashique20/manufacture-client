import React, { useEffect, useState } from "react";
import Orders from "../Order/Orders";

const ManageOrders = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/manageOrder`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    const handleDelete=(id)=>{
        const sure = window.confirm("Do you want to delete?")
    
        if(sure){
         fetch(`http://localhost:5000/manageOrder/${id}`,{
           method:'DELETE',
         })
            .then(res=>res.json())
            .then((data)=>{
             console.log(data);
             const remaining = orders.filter(order=>order._id !== id)
             setOrders(remaining)
            
            })
            .catch((error)=>{
             console.log(error)
            });
        }
        else{
         return;
        }
    
       }
    

    return (
        <div className="sm:grid grid-cols-1  mt-20">
        
        <div class="overflow-x-auto">
<table class="table w-full" >

<thead  >
 
</thead>
<tbody >
  {
    orders.map((order,index)=> <tr key={order._id} >
        <th>{index +1}</th>
        <td><img className="w-96" src={order.img} alt="" /></td>
        <td className="font-bold text-black ">{order.name}   </td>
        <td className="font-bold text-black ">Ordered by   </td>
       
        
        <td className="font-bold text-black">{order.email} </td>
    
        <td><button  onClick={()=>handleDelete(order?._id)}><img className="h-20" src="https://logodix.com/logo/435836.jpg" alt="" /></button></td>
      
     
       
      </tr>)
  }
 
  
 
</tbody>
</table>
</div>
    </div>

    )
}


export default ManageOrders;