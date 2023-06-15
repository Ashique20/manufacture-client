import { useEffect, useState } from "react"
import auth from "../../../firebase.init"
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"






const Orders = () => {
    const [orders, setOrder] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
      if(user){
        fetch(`https://last-server-five.vercel.app/order?email=${user?.email}`, {
            method: "GET",
            headers: {
               'authorization':`Bearer ${localStorage.getItem}`
            }
        })
            .then(res => res.json())
            .then(data =>setOrder(data))
      } 
      
    }, [user])
    return (
        <div >
        
        <div class="overflow-x-auto">
<table class="table w-full" >


<tbody>
  {
    orders.map((a,index)=> <tr key={a._id} >
        <th>{index +1}</th>
        <td><img className="w-96" src={a.img} alt="" /></td>
        <td>{a.name} </td>
        <td>{a.minimumOrderQuantity}</td>
        <td>{a.OrderQuantity}</td>
        <td>{a.price}</td>
      
        <td>
          {(a.price && !a.paid) && <Link to={`/payment/${a._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}

          {(a.price && a.paid) &&  <div>
            <p><span className=" text-success">Paid</span></p>
            <p>TransactionId:<span className="text-success">{a.transactionId}</span></p>
            
            </div>}
        </td>
       
      </tr>)
  }
 
  
 
</tbody>
</table>
</div>
    </div>
    )
}

export default Orders;