import React from "react";
import { Link } from "react-router-dom";
import auth from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import UseAdmin from "./hooks/UseAdmin";

const Navber = () => {
  const [user] = useAuthState(auth)
  const [admin] = UseAdmin(user)
  const logout = () => {

    signOut(auth);

  };
  return (
    <div>
      <div class="navbar  bg-base-100  " style={{ backgroundImage: `url("https://rewirefitness.app/wp-content/uploads/2020/06/gray-bg.jpg")` }}>
        <div class="navbar-start">
          <div class="dropdown ">
            <label tabindex="0" class="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            <li><Link  to={'/'} className="font-bold hover:text-primary">Home</Link></li>

           
            <li><Link to={'/'} className="font-bold hover:text-primary ">Blogs</Link></li>
            <li ><Link className=" font-bold hover:text-primary" to='/dashboard'>My Orders <img className="w-6 ml-10" src="https://pic.onlinewebfonts.com/svg/img_509212.png"  /></Link></li>
            <li ><Link className=" font-bold hover:text-primary" to='/dashboard/review'>My Review</Link></li>
            
           
          
            {admin&&
            
           <>
            <li ><Link className=" font-bold hover:text-primary" to='/dashboard/users'>Make Admin</Link></li>
            <li ><Link className=" font-bold hover:text-primary" to='/dashboard/manageOrder'>Manage Orders</Link></li>
            <li ><Link className=" font-bold hover:text-primary" to='/dashboard/manageProduct'>Manage Products</Link></li>
            <li ><Link className=" font-bold hover:text-primary" to='/dashboard/addProduct'>Add Products</Link></li>
           
           </>
            
            }
            </ul>
          </div>
        <Link to={'/'}  class="btn btn-ghost  normal-case text-xl"><img className="w-24 " src="https://www.parktool.com/assets/img/site/_productEnlarged/ParkTool_Logo_WEB-BLUE.png" alt="" /></Link>
        </div>
        <div class="navbar-center hidden lg:flex ">
          <ul class="menu menu-horizontal px-1 ">
       

           

            <li><Link to={'/dashboard'} className="font-bold hover:text-primary">DashBoard</Link></li>
            
            <li><Link to={'/blogs'} className="font-bold hover:text-primary ">Blogs</Link></li>
            <li><Link to={'/portfolio'} className="font-bold hover:text-primary ">MyPortFolio</Link></li>
            
           
           <div>
           <li><Link  className="font-bold">
              {/* <div className="avatar">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-6">
                { user?.photoURL? <img  src={user?.photoURL} />: <img src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'  />}
                </div>
              </div> */}
               <div class="dropdown ">
            <label tabindex="0" >
            <div className="avatar">
                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-6">
                { user?.photoURL? <img  src={user?.photoURL} />: <img src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'  />}
                </div>
              </div> 
            </label>
            <ul tabindex="0" class="menu menu-compact bg-[#1F2833] dropdown-content mt-3 p-2 shadow  rounded-box w-80 h-96 ">
              <li><img className="ml-20" src={user?.photoURL} alt="" /><a className="text-[#19D3AE]">{user?.displayName}</a></li>

              <li>{user?.email}</li>
              <li className="hover:text-primary"><Link to={'/profile'}>Show Profile</Link></li>
              <li className="mt-4">{user?.uid ? <button className="btn btn-ghost  hover:text-primary" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
              


            </ul>
          </div>

            </Link></li>
           </div>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navber;