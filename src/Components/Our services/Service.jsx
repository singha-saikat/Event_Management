import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { title, image, shortDescription, price,id } = service;
  console.log(title, image);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-60">
          <img src={image} alt="" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{title}</h2>npm
          <p>{shortDescription}</p>
          <span className="text-2xl font-semibold">${price}</span>
        </div>
        <div className="card-actions justify-center mb-2">
          <Link to={`/services/${id}`}>
          <button  className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
