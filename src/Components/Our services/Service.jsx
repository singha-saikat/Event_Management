const Service = ({ service }) => {
  const { title, image,shortDescription } = service;
  console.log(title, image);
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-60">
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{title}</h2>
          <p>{shortDescription}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Service;
