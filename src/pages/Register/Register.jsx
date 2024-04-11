import { Link } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {
  const { user, createUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = new FormData(e.currentTarget)
    console.log("yo");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    // create a new user
    createUser(name,photoURL,email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="mb-5">
        <Navbar></Navbar>
      </div>
      {/* login */}
      <div className="min-h-[65vh] border flex justify-center items-center  mx-auto py-16">
        <div className="h-full bg-white p-20 flex flex-col items-center">
          <div className="mb-5 border-b-2 w-full">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Create a new account
            </h1>
          </div>
          <form className="w-[600px]" onSubmit={handleSubmit}>
            {/* Name */}
            <label className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your user name"
              className="input input-bordered w-full mb-2"
              required
            />
            {/* photo url */}
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo url"
              className="input input-bordered w-full mb-2"
              required
            />
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
                Register
              </button>
            </div>
          </form>
          <p className="mt-5">
            Already have an account ?{" "}
            <Link className="text-red-600" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
