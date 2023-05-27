import React from "react";
import { useQuery } from "react-query";
import Service from "./Service";
import Loading from "../../Shared/Loading/Loading";

const Services =()=>{
const {data:services,isLoading} = useQuery('services',()=>fetch(`https://last-server-five.vercel.app/service`).then(res=>res.json()))
if(isLoading){
  return  <Loading></Loading>
}
    return(
       <div className="bg-[#0B0C10]">
       <div>
        
       <h1 className="text-center mt-10 text-7xl">Available Tools</h1>
       </div>
       
         <div className=" sm:grid grid-cols-1 lg:grid grid-cols-2 gap-10  mt-20 ">
            {
                services.map(service=><Service service={service} key={service._id}></Service>)
            }
        </div>
       </div>
    )
}

export default Services;