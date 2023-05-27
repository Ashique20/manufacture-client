import React  from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import UseAdmin from "../../hooks/UseAdmin";




const DashBoard =()=>{
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user)


    return(
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center   ">
       
        <Outlet ></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul  class="menu p-4 w-56 bg-[#F58216] text-[#3f3d3b]  ">
          
            <li ><Link className=" hover:bg-[#0B0C10] w-96 hover:text-white" to='/dashboard'>My Orders <img className="w-6 ml-10 " src="https://www.agrowex-hub.com/images/orders.png" alt="" /></Link></li>
            <li ><Link className=" hover:bg-[#0B0C10] w-96 hover:text-white" to='/dashboard/review'>My Review <img className="w-6 ml-10" src="https://cdn4.iconfinder.com/data/icons/business-marketing-and-management-round/128/28-512.png" alt="" /></Link></li>
            
           
          
            {admin&&
            
           <>
            <li ><Link className=" hover:bg-[#0B0C10] w-96 hover:text-white" to='/dashboard/users'>Make Admin  <img className="w-6 ml-6" src="https://www.shareicon.net/data/2016/04/14/492851_admin_256x256.png" alt="" /></Link></li>
            <li ><Link className=" hover:bg-[#0B0C10] w-96 hover:text-white" to='/dashboard/manageOrder'>Manage Orders <img className="w-6 ml-2" src="https://uploads-ssl.webflow.com/5eb17aadc64d8e2a72a99c07/5eb5c1debf5a4930b4087098_icono-4_orders.png" alt="" /></Link></li>
            <li ><Link className=" hover:bg-[#0B0C10] w-96 hover:text-white" to='/dashboard/manageProduct'>Manage Products <img className="w-6 " src="https://cdn1.iconfinder.com/data/icons/zwo-miscellaneous-011/64/settings_setup_manage-512.png" alt="" /></Link></li>
            <li ><Link className=" hover:bg-[#0B0C10] w-96 hover:text-white" to='/dashboard/addProduct'>Add Products  <img className="w-6 ml-8" src="https://icon-library.com/images/add-icon-transparent/add-icon-transparent-19.jpg" alt="" /></Link></li>
           
           </>
            
            }
            
           
          
          
          </ul>
        
        </div>
      </div>
    )
}

export default DashBoard;