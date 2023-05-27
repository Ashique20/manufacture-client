import React from "react";

const AllReview=({review})=>{
    return(
      <div>
       
  
      
       <div className="card w-96 bg-base-100 shadow-xl">
       <div className="hero h-80" style={{ backgroundImage: `url(${review?.img})` }}>
 
 <div className="hero-content text-center text-neutral-content">
   <div >

   <div className="avatar">
  <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
{review?.userImg? <img src={review?.userImg}/>:<img src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'  />}
  </div>
</div>
   </div>
 </div>
 </div> 
  <div className="card-body  bg-[#1F2833]">
    <h2 className="card-title">{review?.name}</h2>
    <div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
    <p>{review.review}</p>
    
  </div>
</div>
      </div>
     

      
    )
}

export default AllReview;

{/* */}