/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Provider/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  
 

  const handleRegister = (e) => {
    
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const name = from.get("name");
    const photo = from.get("photo");
    const email = from.get("email");
    const password = from.get("password");
    console.log(name, photo, email, password);
    if (password.length < 6) {
      setRegError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegError("Password must contain at least one capital letter");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegError("Password must contain at least one special character");
      return;
    }

    createUser(email, password)
    .then((userCredential) => {
      // User registered successfully, now update profile
      const user = userCredential.user;
      return updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
    })
    .then(() => {
      console.log("Profile updated");
      e.target.reset();
        toast.success("Congratulations,  You are now part of Our Platform", {
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
      .catch((error) => {
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
      });
  };
  return (
    <div className="hero min-h-screen bg-hero-pattern text-slate-200 ">
      <div className="hero-content flex-col w-full ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body text-slate-900">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <p className="text-black -mt-4 mb-4 text-center">
                Already have a account ?{" "}
                <Link to="/login" className="text-red-500 underline">
                  Login
                </Link>
              </p>
              <button className="btn btn-primary">Register</button>
            </div>
            <ToastContainer />
          </form>
          <div className="text-red-400 px-4 -mt-4">{regError && <p>{regError}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Register;

