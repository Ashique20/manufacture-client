import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {

    console.log(data)

    fetch(`http://localhost:5000/addProduct`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.acknowledged
          === true) {
            toast.success('Successfully Added a Product')
        }
    
      })
  };

  return (
    <div className="justify-center items-center h-screen flex text-black">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-center">Login</h2>
          <div className="flex flex-col w-full border-opacity-50 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name")} name="name" type="text" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input {...register("img")} name="img" type="text" placeholder="PhotoUrl" className="input input-bordered" />
              </div>
              <div className="form-control">
                {/* <label className="label">
            <span className="label-text">Email</span>
          </label> */}
                {/* <input {...register("email")} name="email"  type="email" placeholder={user?.email}  className="input input-bordered" /> */}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input  {...register("description")} name="description" type="text" placeholder="Description" className="input input-bordered h-40" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">orderQuantity</span>
                </label>
                <input {...register("OrderQuantity")} name="OrderQuantity" type="text" placeholder="OrderQuantity" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">MinimumOrderQuantity</span>
                </label>
                <input {...register("minimumOrderQuantity")} name="minimumOrderQuantity" type="text" placeholder="MinimumOrderQuantity" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input {...register("price")} name="price" type="text" placeholder="Price" className="input input-bordered" />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">AvailableQuantity</span>
                </label>
                <input {...register("availableQuantity")} name="availableQuantity" type="text" placeholder="AvailableQuantity" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Product</button>

              </div>

            </form>


          </div>

        </div>
      </div>
    </div>
  )
}


export default AddProduct;