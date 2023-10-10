import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { AuthContext } from "../Components/Provider/AuthProvider";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { setLoading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setEmailError("");
    setPasswordError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate(location?.state ? location.state : "/");
      console.log(user);
      e.target.reset();

      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate('/');
      }, 2000); 
    } catch (error) {
      console.error(error);

      if (error.code === "auth/user-not-found") {
        setEmailError("No account found with this email");
      } else if (error.code === "auth/wrong-password") {
        setPasswordError("Wrong password");
      } else if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email format");
      } else {
        setEmailError("An error occurred. Please try again.");
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="hero min-h-screen max-w-none bg-gradient-to-r from-blue-500 to-indigo-600 text-slate-200 transition-all duration-500 ease-in-out">
      <div className="hero-content flex flex-col md:flex-row items-center justify-center h-full w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-4xl md:text-3xl font-bold animate__animated animate__fadeInDown ">
            Login now!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-white transition-transform transform hover:scale-105">
          <form
            onSubmit={handleLogin}
            className="card-body text-slate-900 p-4 sm:p-6 md:p-8"
          >
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

              {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
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

              {passwordError && (
                <p className="text-red-500 mt-1">{passwordError}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <p className="text-black -mt-4 mb-4 text-center">
                New to this website? Please{" "}
                <Link
                  to="/register"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Register
                </Link>
              </p>
              <button className="btn btn-primary bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 w-full p-2 text-white rounded-md">
                Login
              </button>
            </div>
            <ToastContainer />
          </form>
          <div className="p-2 space-y-2">
            <h1 className="font-semibold text-center text-black -mt-4">
              Login with
            </h1>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-info w-full rounded-lg"
            >
              <FaGoogle></FaGoogle>
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
