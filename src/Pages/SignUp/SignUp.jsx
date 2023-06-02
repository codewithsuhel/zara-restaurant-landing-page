import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                const saveUser = {name: data.name, email: data.email }
              fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                  'content-type': 'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.insertedId){
                  reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully',
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
                }
              })
              // console.log('user profile info updated')
              
            })
            .catch(error=>{
              console.log(error.message)
            })
        })
    };


    return (
        <>
            <Helmet>
                <title>ZaRa Restaurant | Sign Up</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-1/2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
          <img className='w-96 h-auto' src="https://i.ibb.co/6bv0WZX/zara-Login.jpg" alt="" />
          </div>
          <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-3xl text-center mt-5 mb-5 font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-500">photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered"/>
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                     required: true, 
                     minLength: 6, 
                     maxLength: 20,
                     pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                     })} name="password" placeholder="password" className="input input-bordered" />

                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one lowercase, one upper case, one number and one special characters</p>}

              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="signup" />
              </div>
            </form>
            <p className='text-center mb-10'> <small>Already Sign Up ?<Link to="/login" className="text-yellow-500 font-bold"> Please Login</Link> </small> </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      </>
    );
};

export default SignUp;