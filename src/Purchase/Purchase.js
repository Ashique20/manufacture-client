import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import { toast } from "react-toastify";


const Purchase = () => {
  const { id } = useParams()
  const [order, setOrder] = useState([])
const [user] = useAuthState(auth)


  useEffect(() => {
    fetch(`https://last-server-five.vercel.app/service/${id}`)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [id])

  const handleDecrease = event => {
    event.preventDefault();
    const OrderQuantity = Number(order.OrderQuantity) - 1;


    fetch(`https://last-server-five.vercel.app/service/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ OrderQuantity })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(OrderQuantity)
        setOrder({ ...order, OrderQuantity })
       
      })



  }

  const handleIncrease = e => {
    e.preventDefault();
    const OrderQuantity = (Number(order.OrderQuantity) || Number(order.minimumOrderQuantity)) + Number(e.target.increase.value);
    fetch(`https://last-server-five.vercel.app/service/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ OrderQuantity })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(OrderQuantity)
        return setOrder({ ...order, OrderQuantity })
      })

  }


  const booking = {
    bookingId:order._id,
    img:order.img,
    name:order.name,
    description:order.description,
    OrderQuantity:order.OrderQuantity,
    price:order.price,
    minimumOrderQuantity:order.minimumOrderQuantity,
    email:user?.email

  }

    const handleOrder = event =>{
      event.preventDefault()
     fetch(`https://last-server-five.vercel.app/order`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if (data?.acknowledged
        === true) {
          toast.success('Successfully Purchased a Product')
      }
     })
    }

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/bulbs-wires-table_23-2147743027.jpg?t=st=1680859433~exp=1680860033~hmac=3d772321d86f3273d39de42eb156479581490e358ebdf9a93aaccce33a340d3b")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
     
     <div className="hero-content text-center text-neutral-content">
        <div className="card w-96 glass">
          <figure><img src={order.img} alt="car!" /></figure>
          <div className="card-body">
            <h1 className="card-title">{order.name}</h1>
            <p>{order.description}</p>
            <p>{order.minimumOrderQuantity || order.OrderQuantity}</p>
            <h1>Available:  {order.availableQuantity}</h1>
            <div className="flex">
              <h1>Order Quantity:{order.OrderQuantity || order.minimumOrderQuantity}</h1>




            </div>
            <div className="card-actions justify-end">
              <form onSubmit={handleIncrease}>
                <p><input placeholder={order.OrderQuantity || order.minimumOrderQuantity} name="increase" type="number" class="input input-bordered input-accent w-full max-w-xs" /></p>
                <button disabled={order.OrderQuantity >= order.availableQuantity} className="btn btn-primary" >Increase</button>

              </form>
              <button disabled={order.OrderQuantity <= order.minimumOrderQuantity} className="btn btn-primary" onClick={handleDecrease}>Decrease</button>
            </div>
            <button type="submit" onClick={handleOrder} disabled={order.OrderQuantity >= order.availableQuantity} className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Purchase;