import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import CheckOut from "./CheckOut/CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51MsWG8IIoBuPupkUpwnu0WbfWmZj8AkUykMtX0r97pTzVz7GuLJwxMuobZsaspNL2Rey3VmLptRGsyPElT6ZkB8d00gkkBjapv');

const Payment = () => {
  const { id } = useParams()
  const { data: order, isLoading } = useQuery(['order', id], () => fetch(`http://localhost:5000/order/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
     
      return res.json()
    }))





  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="bg-[#0B0C10]">
      <div className="drawer text-black">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content justify-self-center mt-60 ">
          <div className="card  bg-base-100 shadow-xl    ">
            <figure><img className="w-96" src={order?.img} alt="Shoes" /></figure>
            <div className="card-body " style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9475657.jpg")` }}>
              <h2 className="card-title ">
                {order.name}
                <div className="badge badge-secondary">Please Pay</div>
              </h2>
              <p>{order?.price}$</p>
              <p>Order Quantity {order?.OrderQuantity}PC</p>
              <p>Minimum Order Quantity: {order.minimumOrderQuantity}</p>
              <div className="card-actions justify-center mt-6 ">
                <div className="badge badge-outline">Manufacture</div>
                <div className="badge badge-outline">Tools</div>
              </div>
              <div className="flex flex-col w-full">

                <div className="divider"></div>
                <h1>Total: {Number(order.price) + Number(order.OrderQuantity)}$</h1>

              </div>
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button ml-screen">Pay by Credit Card</label>
            </div>


          </div>


        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu  p-4 w-2/5 bg-[#1F2833] text-base-content ">

            <div class="card  flex-shrink-0 h-96 max-w-md shadow-2xl bg-[#0B0C10]">
              <div class="card-body w-96 ">
              <figure><img className="w-96 h-full" src={order?.img} alt="Shoes" /></figure>
              <Elements stripe={stripePromise}>
            <CheckOut order={order} />
          </Elements>
          
              </div>
              <h1 className="mt-20 justify-center text-9xl text-primary ">{Number(order.price) + Number(order.OrderQuantity)}$</h1>
            </div>

          </ul>
        </div>
      </div>

    </div>


  )
}

export default Payment;





