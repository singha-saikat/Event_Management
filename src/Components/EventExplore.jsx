const EventExplore = ({event}) => {
  return (
    <div>
      <div className="h-screen mt-4">
        <img className="w-full " src={event.image} alt="" />
        <div className="mt-8 text-inherit bg-gray-300 p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
          <p className="">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventExplore;
