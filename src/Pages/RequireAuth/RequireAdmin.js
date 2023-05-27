import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import UseAdmin from "../../hooks/UseAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

const RequireAdmin =({children})=>{
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    const location = useLocation();
    if(!user||!admin){
        signOut(auth)
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
}

export default RequireAdmin;