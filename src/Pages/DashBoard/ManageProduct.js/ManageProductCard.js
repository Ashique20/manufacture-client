import React from "react";
import { useNavigate } from "react-router-dom";

const ManageProductCard =({service,setDeletingDoctor})=>{
    const { name, img, description,_id,
        minimumOrderQuantity,
        availableQuantity,
        price
        
        
        }= service;

     
       
    
    return (
        <div class="card lg:card-side  bg-base-100 shadow-xl w-10/12 ml-20 ">
        <figure><img className="w-full h-full"  src={img} alt="Album"/></figure>
        <div className="card-body bg-[#1F2833]">
          <h1 class="card-title">{name}</h1>
          <h2 className="w-60 "> {description}</h2>
          <p>Price(Per Item): {price}</p>
          <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
          <p>Available Quantity: {availableQuantity}</p>

          <div class="card-actions justify-end">
            
          <label onClick={()=>setDeletingDoctor(service)}  htmlFor="DeleteModal" ><img className="  h-14 w-full" src="http://www.clker.com/cliparts/4/u/i/3/l/x/delete-button-grey-hi.png" /></label>
          </div>
        </div>
      </div>
    )
}

export default ManageProductCard;


