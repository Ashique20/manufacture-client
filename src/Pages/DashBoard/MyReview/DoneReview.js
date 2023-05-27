import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useParams } from "react-router-dom";

const DoneReview =()=>{
  const { id } = useParams()
  const [order, setOrder] = useState([])
  const [user] = useAuthState(auth)


  useEffect(() => {
    fetch(`https://last-server-five.vercel.app/service/${id}`)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [id])

  const AddReview = {
    name:order?.name,
   
    userName:user?.displayName,
    userImg:user?.photoURL,
    email:user?.email,
    img:order?.img

  }


  const handleReview =e=>{
    e.preventDefault()
    const review = e.target.review.value;
  
    fetch(`https://last-server-five.vercel.app/review`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({...AddReview,review})
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
     })
    

  }
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={order.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Add Review For {order?.name}</h1>
            <p className="py-6">{order?.description}</p>

           <form onSubmit={handleReview}>
           <input type="text" name="review" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
           <button  className="btn btn-primary ml-6" >Add</button>
           </form>
          

          </div>
        </div>
      </div>
    )
}

export default DoneReview;