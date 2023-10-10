import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center ">
      {/* <h3>Your Profile</h3>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>Profile Image: <img src={user.photoURL} alt="User Profile" /></p> */}
      <div className="card w-96 bg-base-100 shadow-xl bg-hero-pattern text-white">
        <figure className="px-10 pt-10">
          {
            user.photoURL &&
            <img
            src="{user.photoURL
            }"
            
            className="rounded-xl"
          />
          }
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
