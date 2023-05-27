import React from "react";
import { Link } from "react-router-dom";


const WebCard =({img,link})=>{
    return(
        <div className="card w-3/4 bg-base-100 shadow-xl image-full mt-56">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
           <Link to={link}> <button  className="btn btn-active btn-ghost w-40">View</button></Link>
          </div>
        </div>
      </div>
    )
}

export default WebCard;