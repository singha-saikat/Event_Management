import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const events = useLoaderData();

  useEffect(() => {
    const findEvent = events?.find((event) => event.id == id);
    setEvent(findEvent);
  }, [id, events]);
  return (
    <div className="h-screen mt-4">
      <img className="w-full " src={event.image} alt="" />
      <div className="mt-8 text-inherit bg-gray-300 p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
        <p className="">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
