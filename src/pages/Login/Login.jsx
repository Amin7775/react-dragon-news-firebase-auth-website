import { Link , useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {

  const {signInUser} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate() 


    const handleSubmit = e =>{
        e.preventDefault()
        // const form = new FormData(e.currentTarget)
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then(res=> {
          console.log(res.user)
          navigate(location?.state ? location.state : '/')
        })
    }

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="mb-5">
        <Navbar></Navbar>
      </div>
      {/* login */}
      <div className="min-h-[65vh] border flex justify-center items-center  mx-auto">
        <div className="h-full bg-white p-20 flex flex-col items-center">
          <div className="mb-5 border-b-2 w-full">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Login your account
            </h1>
          </div>
          <form className="w-[600px]" onSubmit={handleSubmit}>
            {/* email */}
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full mb-2"
              required
            />
            {/* Password */}
            <label className="label">
              <span className="label-text text-lg font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mb-3"
              required
            />
            <br />

            {/* btn */}
            <div>
              <button className="btn mt-5 bg-[#403F3F] text-white w-full">
                Login
              </button>
            </div>
          </form>
          <p className="mt-5">Dont have an account ? <Link className="text-red-600" to={'/register'}>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
