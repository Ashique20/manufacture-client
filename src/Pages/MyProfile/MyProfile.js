import React, { useEffect, useState }  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const MyProfile = ()=>{
    const { register, handleSubmit } = useForm();
    const [user] =useAuthState(auth)
    const { id } = useParams()
    const [order, setOrder] = useState([])

    useEffect(() => {
      fetch(`https://last-server-five.vercel.app/profile/${user?.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [id])
   
  const onSubmit = data =>{
  
    console.log(data)
    const email = user?.email
    fetch(`https://last-server-five.vercel.app/profile`,{
        method:'POST',
        
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({...data,email})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
       
    })
  };
  
  const handleUpdate =data=>{
    // e.preventDefault()
   
    // const name = e.target.name.value;
    // const email = user?.email;
    // const education= e.target.education.value;
    // const phone= e.target.phone.value;
    
     
    // const update ={
    //      name,email,education,phone
    // }
    
    fetch(`https://last-server-five.vercel.app/profile/${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if (data?.acknowledged
        === true) {
          toast.success('Successfully Added a Updated. Please RELOAD')
      }
    })
    
  }

   
    console.log(user)
    return(
        <div>
           <div className="hero min-h-[50%] " style={{ backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/63ae6357180649.59cbb865bd4da.jpg")` }}>
  <div className="hero-content text-center mt-20">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello {user?.displayName}</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="avatar online">
  <div className="w-52 rounded-full">
    
    <img  src={user?.photoURL} />
  </div>
</div>
    </div>
  </div>
</div>
<div className="hero min-h-screen bg-[#1F2833]">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left ">
    <div className="overflow-x-auto ml-40 ">
      <h1 className="text-6xl">Intorduction</h1>
  <table className="table w-full mt-20  ">
    {/* head */}
    <thead>
      
    </thead>
    <tbody>
      {/* row 1 */}
      <tr >
     
        <td >Lives in:</td>
        <td>{order.location}</td>
       
      </tr>
      {/* row 2 */}
      <tr className="hover">
       
        <td>Email Address:</td>
        <td>{user.email}</td>
      
      </tr>
      {/* row 3 */}
      <tr>
    
        <td>Suidied in:</td>
        <td>{order.education}</td>
       
      </tr>
      <tr>
    
        <td>Phone Number:</td>
        <td>{order.phone}</td>
       
      </tr>
    </tbody>
  </table>
</div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} name="name"  type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Email</span>
          </label> */}
          {/* <input {...register("email")} name="email"  type="email" placeholder={user?.email}  className="input input-bordered" /> */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input {...register("education")} name="education" type="text" placeholder="Education" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input {...register("location")} name="location"  type="text" placeholder="Location" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input {...register("phone")} name="phone" type="text" placeholder="Phone Number" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
          <button onClick={handleSubmit(handleUpdate)} type="button" className="btn btn-primary">Update</button>
        </div>
       
        </form>
        
         
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default MyProfile;