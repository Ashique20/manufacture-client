import React from "react";

const Skill =({img,name})=>{
    return(
    <div > 
   
          <div className="card w-40 hover:rotate-45 hover:transition  duration-300 hover:indicator px-10 pt-5 ">
   
          <span className="hover:indicator-item badge hover:badge-primary h-10">{name}</span> 
          <img src={img} className="rounded-xl w-40 bg-white" />
        
      </div>
       
      
         
    </div>
    )
}

export default Skill;