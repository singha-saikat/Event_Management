import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, image, shortDescription, price,id } = service;
  console.log(title, image);
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-60">
          <img src={image} alt="" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{title}</h2>
          <p>{shortDescription}</p>
          <span className="text-2xl font-semibold">${price}</span>
        </div>
        <div className="card-actions justify-center mb-2">
          <button onClick={<Link to={`/service/${id}`}></Link>} className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
