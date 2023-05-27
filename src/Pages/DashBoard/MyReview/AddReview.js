import React from "react";
import { useQuery } from "react-query";
import ReviewCard from "./ReviewCard";
import Loading from "../../../Shared/Loading/Loading";

const AddReview =()=>{
    const {data:services,isLoading} = useQuery('services',()=>fetch(`https://last-server-five.vercel.app/service`).then(res=>res.json()))
    if(isLoading){
      return <Loading></Loading>
    }
      return(
           <div className="bg-[#0B0C10]">
           <div>
            
           <h1 className="text-center">Available Tools</h1>
           </div>
           
             <div className=" sm:grid grid-cols-1 lg:grid grid-cols-2 gap-10  mt-20 ">
                {
                    services.map(service=><ReviewCard service={service} key={service._id}></ReviewCard>)
                }
            </div>
           </div>
        )
}

export default AddReview;


