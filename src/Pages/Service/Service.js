import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, description,
    minimumOrderQuantity,
    availableQuantity,
    price


  } = service;

  const navigate = useNavigate()
  const Purchase = () => {
    navigate(`/purchase/${service._id}`)
  }


  return (
    <div class="card lg:card-side  bg-base-100 shadow-xl w-10/12 ml-20 ">
      <figure><img className="w-full h-full" src={img} alt="Album" /></figure>
      <div className="card-body bg-[#1F2833]">
        <h1 class="card-title">{name}</h1>
        <h2 className="w-60 "> {description}</h2>
        <p>Price(Per Item): {price}</p>
        <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>

        <div class="card-actions justify-end">
          
          <button onClick={Purchase} className="btn btn-outline btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  )
}

export default Service;