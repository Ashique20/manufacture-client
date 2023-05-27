import React, { useEffect, useState } from "react";
import AllReview from "./AllReview";

const ShowReview=()=>{
    const [reviews,Setreviews] = useState([])
    useEffect(()=>{
        fetch(`https://last-server-five.vercel.app/review`)
        .then(res=>res.json())
        .then(data=>Setreviews(data))
    },[])
    return(
        <div className=" sm:grid grid-cols-1 lg:grid grid-cols-3 gap-10  mt-20 ">
          
           {
            reviews.map(review=><AllReview review={review} key={review
            ._id}></AllReview>)
           }
        </div>
       
    )
}

export default ShowReview;