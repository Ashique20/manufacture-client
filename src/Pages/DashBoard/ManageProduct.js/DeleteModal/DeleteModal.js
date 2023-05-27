import React from "react";

const DeleteModal =({service, handleDelete})=>{
    const {name,_id} =service;
    return(
        <div>
            


<input type="checkbox" id="DeleteModal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
<h3 class="font-bold text-lg text-red-500 ">Are you sure you want to delete {name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
    <label htmlFor="DeleteModal" onClick={()=>handleDelete(_id)}  className="btn btn-xs btn-error"> Delete</label>
      <label  htmlFor="DeleteModal" class="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
        </div>

    )
}

export default DeleteModal;


{/* <label onClick={()=>setDeletingDoctor(doctor)} for="DeleteModal" class="btn btn-xs btn-error">Delete</label> */}
// onClick={()=>setDeletingDoctor(service)}