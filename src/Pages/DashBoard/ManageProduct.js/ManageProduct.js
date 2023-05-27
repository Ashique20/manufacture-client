import React, { useEffect, useState } from "react";

import ManageProductCard from "./ManageProductCard";
import DeleteModal from "./DeleteModal/DeleteModal";
import { toast } from "react-toastify";



const ManageProduct =()=>{
    const [deletingDoctor,setDeletingDoctor] = useState(null)
    const [services,setService] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/service`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    const handleDelete=(id)=>{
      
    
   
         fetch(`http://localhost:5000/service/${id}`,{
           method:'DELETE',
         })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data?.deletedCount === 1){
                    toast.success(`${services.map(service=>service.name)}  is deleted`)
                    setDeletingDoctor(null)
                    const remaining = services.filter(service=>service._id !== id)
                    setService(remaining)
                   
                  
                }
             
            
            })
            .catch((error)=>{
             console.log(error)
            });
 
    
    
       }
        return(
           <div className="bg-[#0B0C10]">
           <div>
            
           <h1 className="text-center mt-10 text-7xl">Manage Products <span className="text-2xl ml-20">Total Products {services?.length}</span></h1>
         
           </div>
           
             <div className=" sm:grid grid-cols-1 lg:grid grid-cols-1 gap-10  mt-20 ">
                {
                    services?.map(service=><ManageProductCard service={service} key={service._id} setDeletingDoctor={setDeletingDoctor}    ></ManageProductCard>)
                }
            </div>
            <div>
                {
                    services?.map(service=><DeleteModal service={service} key={service._id} handleDelete={()=>handleDelete(service._id)}     ></DeleteModal>)
                }
            </div>
           </div>
        )
}

export default ManageProduct