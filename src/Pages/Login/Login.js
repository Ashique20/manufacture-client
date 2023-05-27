import React from "react";
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseToken from "../../hooks/useToken";

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading,gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);

let signInError;
const[token] = UseToken(user || gUser)

const location = useLocation();
const navigate = useNavigate();
const from = location?.state?.from?.pathname||'/';

  if (token) {
    navigate(from, { replace: true });
    
  }

  if (loading || gLoading) {
    return <Loading></Loading>
}

if(error || gError){
  signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
}

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };



  return (
    <div className="justify-center items-center h-screen flex text-black">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center">Login</h2>
          <div className="flex flex-col w-full border-opacity-50 ">
            <form className="text-black" onSubmit={handleSubmit(onSubmit)}>



              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">Email</span>

                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is required'
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: 'Provide a Valid Email'
                    }

                  })}
                  type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email.message}</span>
                  }
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>
                  }

                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>

                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Password must be of 6 characters'
                    }

                  })}
                  type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                <label className="label ">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">{errors.password.message}</span>
                  }
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password.message}</span>
                  }

                </label>
              </div>


                  {signInError}
             

              <input type="submit" value="Login
              " className="btn btn-active  w-full max-w-xs" />
            </form>
            <p><small>New to Tool Manufacturure? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
            <div className="divider decoration-black">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-active">Button</button>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Login;