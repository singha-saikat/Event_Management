import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventExplore from "./EventExplore";

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const events = useLoaderData();

  useEffect(() => {
    const findEvent = events?.find((event) => event.id == id);
    setEvent(findEvent);
  }, [id, events]);
  return (
    <div>
      <EventExplore event={event}></EventExplore>
    </div>
  );
};

export default EventDetails;
