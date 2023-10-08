import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin =(e)=>{
      
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password = from.get('password');
    console.log(email,password);
    signIn(email,password)
    .then(result => {
      console.log(result.user);
      e.target.reset();
      
      toast.success('Logged in successfully', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        navigate('/')
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  })
    
    
}

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-slate-200 transition-all duration-500 ease-in-out">
      <div className="hero-content flex items-center justify-center h-full w-full ">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white transition-transform transform hover:scale-105">
          <form onSubmit={handleLogin} className="card-body text-slate-900 p-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full mt-2 p-2"
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full mt-2 p-2"
                required
              />
            </div>
            <div className="form-control mt-6">
              <p className="text-black -mt-4 mb-4 text-center">New to this website? Please <Link to="/register" className="text-blue-500 underline hover:text-blue-700">Register</Link></p>
              <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 w-full p-2 text-white rounded-md">Login</button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
